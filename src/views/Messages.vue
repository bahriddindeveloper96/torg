
<template>
  <div class="messages-page">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">{{ t('messages.title') }}</h1>
        <div class="header-actions">
          <button class="filter-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{ t('messages.filter') }}</span>
          </button>
        </div>
      </div>

      <div class="messages-container" v-if="messages.length > 0">
        <div class="messages-tabs">
          <button 
            class="tab-button" 
            :class="{ active: activeTab === 'all' }"
            @click="activeTab = 'all'"
          >
            {{ t('messages.tabs.all') }}
          </button>
          <button 
            class="tab-button" 
            :class="{ active: activeTab === 'unread' }"
            @click="activeTab = 'unread'"
          >
            {{ t('messages.tabs.unread') }}
          </button>
          <button 
            class="tab-button" 
            :class="{ active: activeTab === 'important' }"
            @click="activeTab = 'important'"
          >
            {{ t('messages.tabs.important') }}
          </button>
        </div>

        <div class="messages-list">
          <div 
            v-for="message in filteredMessages" 
            :key="message.id" 
            class="message-card"
            :class="{ unread: !message.read }"
            @click="$router.push(`/messages/${message.id}`)"
          >
            <div class="message-avatar">
              <img :src="message.userAvatar" :alt="message.userName">
              <div class="online-status" :class="{ online: message.isOnline }"></div>
            </div>
            <div class="message-content">
              <div class="message-header">
                <h3 class="user-name">{{ message.userName }}</h3>
                <span class="message-time">{{ formatTime(message.time) }}</span>
              </div>
              <div class="message-product">
                <img :src="message.productImage" :alt="message.productTitle" class="product-image">
                <div class="product-info">
                  <h4 class="product-title">{{ message.productTitle }}</h4>
                  <p class="product-price">{{ formatPrice(message.productPrice) }}</p>
                </div>
              </div>
              <p class="message-preview">{{ message.lastMessage }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="empty-state" v-else>
        <div class="empty-illustration">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#002F34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h2>{{ t('messages.emptyState.title') }}</h2>
        <p>{{ t('messages.emptyState.description') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeTab = ref('all')

const messages = ref([
  {
    id: 1,
    userName: 'Aziz Rahimov',
    userAvatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=120',
    isOnline: true,
    time: 2, // minutes ago
    productTitle: 'iPhone 13 Pro Max',
    productPrice: 10000000,
    productImage: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=80',
    lastMessage: t('chat.messages.priceQuestion'),
    read: false
  },
  {
    id: 2,
    userName: 'Dilshod Karimov',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120',
    isOnline: false,
    time: 60, // minutes ago (1 hour)
    productTitle: 'Samsung Galaxy S21',
    productPrice: 8500000,
    productImage: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=80',
    lastMessage: 'Kelishdik, qachon ko\'rishamiz?',
    read: true
  }
])

const formatTime = (minutes) => {
  if (minutes < 60) {
    return t('messages.timeFormat.minutesAgo', { minutes })
  }
  const hours = Math.floor(minutes / 60)
  return t('messages.timeFormat.hoursAgo', { hours })
}

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ' + t('messages.currency')
}

const filteredMessages = computed(() => {
  switch (activeTab.value) {
    case 'unread':
      return messages.value.filter(m => !m.read)
    case 'important':
      return messages.value.filter(m => m.important)
    default:
      return messages.value
  }
})
</script>

<style scoped>
.messages-page {
  padding: 24px 0;
  min-height: calc(100vh - 64px);
  background: #f2f4f5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.page-title {
  font-size: 28px;
  font-weight: 600;
  color: #002f34;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.filter-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 2px solid #002f34;
  border-radius: 4px;
  background: transparent;
  color: #002f34;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-button:hover {
  background: #002f34;
  color: white;
}

.messages-tabs {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid #e5e9eb;
  padding-bottom: 8px;
}

.tab-button {
  padding: 8px 16px;
  border: none;
  background: transparent;
  color: #406367;
  font-weight: 500;
  cursor: pointer;
  position: relative;
}

.tab-button.active {
  color: #002f34;
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: -9px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #002f34;
}

.messages-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.message-card {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
}

.message-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.message-card.unread {
  background: #f0f7ff;
}

.message-avatar {
  position: relative;
  width: 48px;
  height: 48px;
}

.message-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.online-status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ccc;
  border: 2px solid white;
}

.online-status.online {
  background: #23e5db;
}

.message-content {
  flex: 1;
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.user-name {
  font-size: 16px;
  font-weight: 600;
  color: #002f34;
  margin: 0;
}

.message-time {
  font-size: 14px;
  color: #406367;
}

.message-product {
  display: flex;
  gap: 12px;
  padding: 8px;
  background: #f7f8f9;
  border-radius: 4px;
  margin-bottom: 8px;
}

.product-image {
  width: 48px;
  height: 48px;
  border-radius: 4px;
  object-fit: cover;
}

.product-info {
  flex: 1;
}

.product-title {
  font-size: 14px;
  font-weight: 500;
  color: #002f34;
  margin: 0 0 4px 0;
}

.product-price {
  font-size: 14px;
  font-weight: 600;
  color: #002f34;
  margin: 0;
}

.message-preview {
  font-size: 14px;
  color: #406367;
  margin: 0;
}

.empty-state {
  text-align: center;
  padding: 48px 0;
}

.empty-illustration {
  margin-bottom: 24px;
}

.empty-state h2 {
  font-size: 24px;
  font-weight: 600;
  color: #002f34;
  margin: 0 0 8px 0;
}

.empty-state p {
  font-size: 16px;
  color: #406367;
  margin: 0;
}

@media (max-width: 768px) {
  .messages-page {
    padding: 16px 0;
  }

  .page-title {
    font-size: 24px;
  }

  .messages-tabs {
    overflow-x: auto;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  .message-card {
    padding: 12px;
  }

  .message-product {
    flex-direction: column;
  }

  .product-image {
    width: 100%;
    height: 120px;
  }
}
</style>