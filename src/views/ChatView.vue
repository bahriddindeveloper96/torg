<template>
  <div class="chat-view">
    <div class="chat-container">
      <!-- Chat Header -->
      <div class="chat-header">
        <div class="user-info">
          <router-link to="/messages" class="back-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <div class="avatar">
            <img :src="chat.userAvatar" :alt="chat.userName">
            <div class="online-status" :class="{ online: chat.isOnline }"></div>
          </div>
          <div class="user-details">
            <h2 class="user-name">{{ chat.userName }}</h2>
            <span class="user-status">{{ chat.isOnline ? t('chat.status.online') : t('chat.status.lastSeen', { time: chat.lastSeen }) }}</span>
          </div>
        </div>
        <div class="header-actions">
          <button class="action-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="1" fill="currentColor"/>
              <circle cx="6" cy="12" r="1" fill="currentColor"/>
              <circle cx="18" cy="12" r="1" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Product Info -->
      <div class="product-info">
        <img :src="chat.productImage" :alt="chat.productTitle" class="product-image">
        <div class="product-details">
          <h3 class="product-title">{{ chat.productTitle }}</h3>
          <p class="product-price">{{ formatPrice(chat.productPrice) }}</p>
        </div>
        <router-link :to="'/product/' + chat.productId" class="view-ad-button">
          {{ t('chat.product.viewAd') }}
        </router-link>
      </div>

      <!-- Chat Messages -->
      <div class="messages-container" ref="messagesContainer">
        <div class="date-divider">
          <span>{{ t('chat.status.today') }}</span>
        </div>
        <div 
          v-for="message in chat.messages" 
          :key="message.id"
          class="message"
          :class="{ 'message-sent': message.sent, 'message-received': !message.sent }"
        >
          <div class="message-content">
            <p>{{ message.text }}</p>
            <span class="message-time">{{ message.time }}</span>
          </div>
        </div>
      </div>

      <!-- Message Input -->
      <div class="message-input-container">
        <div class="input-wrapper">
          <button class="attachment-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59718 21.9983 8.005 21.9983C6.41282 21.9983 4.88584 21.3658 3.76 20.24C2.63416 19.1142 2.00166 17.5872 2.00166 15.995C2.00166 14.4028 2.63416 12.8758 3.76 11.75L12.95 2.56C13.7006 1.80943 14.7185 1.38777 15.78 1.38777C16.8415 1.38777 17.8594 1.80943 18.61 2.56C19.3606 3.31057 19.7822 4.32855 19.7822 5.39C19.7822 6.45145 19.3606 7.46943 18.61 8.22L9.41 17.41C9.03472 17.7853 8.52573 17.9961 7.995 17.9961C7.46427 17.9961 6.95528 17.7853 6.58 17.41C6.20472 17.0347 5.99389 16.5257 5.99389 15.995C5.99389 15.4643 6.20472 14.9553 6.58 14.58L15.07 6.1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <input 
            type="text" 
            v-model="newMessage" 
            :placeholder="t('chat.input.placeholder')"
            @keyup.enter="sendMessage"
          >
          <button class="send-button" @click="sendMessage" :disabled="!newMessage.trim()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()
const messagesContainer = ref(null)
const newMessage = ref('')

// Simulated chat data
const chat = ref({
  id: route.params.id,
  userName: 'Aziz Rahimov',
  userAvatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=120',
  isOnline: true,
  lastSeen: '10 daqiqa oldin',
  productId: 1,
  productTitle: 'iPhone 13 Pro Max',
  productPrice: 10000000,
  productImage: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=80',
  messages: [
    {
      id: 1,
      text: t('chat.messages.greeting'),
      time: '14:30',
      sent: true
    },
    {
      id: 2,
      text: t('chat.messages.reply'),
      time: '14:32',
      sent: false
    },
    {
      id: 3,
      text: t('chat.messages.priceQuestion'),
      time: '14:33',
      sent: true
    },
    {
      id: 4,
      text: t('chat.messages.priceAnswer', { price: '9,500,000' }),
      time: '14:35',
      sent: false
    }
  ]
})

const formatPrice = (price) => {
  if (typeof price === 'string') {
    return price
  }
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ' + t('chat.messages.currency')
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const sendMessage = () => {
  if (newMessage.value.trim()) {
    chat.value.messages.push({
      id: chat.value.messages.length + 1,
      text: newMessage.value,
      time: new Date().toLocaleTimeString(
        t('locale') === 'uz' ? 'uz-UZ' : 'ru-RU', 
        { hour: '2-digit', minute: '2-digit' }
      ),
      sent: true
    })
    newMessage.value = ''
    scrollToBottom()
  }
}

onMounted(() => {
  scrollToBottom()
})
</script>

<style scoped>
.chat-view {
  height: 100vh;
  background: #f2f4f5;
}

.chat-container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e5e9eb;
  background: white;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.back-button {
  color: #002f34;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.back-button:hover {
  background: #f2f4f5;
}

.avatar {
  position: relative;
  width: 48px;
  height: 48px;
}

.avatar img {
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

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 18px;
  font-weight: 600;
  color: #002f34;
  margin: 0;
}

.user-status {
  font-size: 14px;
  color: #406367;
}

.action-button {
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  color: #002f34;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.action-button:hover {
  background: #f2f4f5;
}

.product-info {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f7f8f9;
  border-bottom: 1px solid #e5e9eb;
}

.product-image {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
}

.product-details {
  flex: 1;
}

.product-title {
  font-size: 16px;
  font-weight: 500;
  color: #002f34;
  margin: 0 0 4px 0;
}

.product-price {
  font-size: 16px;
  font-weight: 600;
  color: #002f34;
  margin: 0;
}

.view-ad-button {
  padding: 8px 16px;
  background: transparent;
  border: 2px solid #002f34;
  color: #002f34;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}

.view-ad-button:hover {
  background: #002f34;
  color: white;
}

.messages-container {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.date-divider {
  text-align: center;
  margin: 16px 0;
  position: relative;
}

.date-divider::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
  background: #e5e9eb;
  z-index: 0;
}

.date-divider span {
  background: white;
  padding: 0 16px;
  color: #406367;
  font-size: 14px;
  position: relative;
  z-index: 1;
}

.message {
  max-width: 70%;
  display: flex;
  flex-direction: column;
}

.message-sent {
  align-self: flex-end;
}

.message-received {
  align-self: flex-start;
}

.message-content {
  background: #f2f4f5;
  padding: 12px 16px;
  border-radius: 12px;
  position: relative;
}

.message-sent .message-content {
  background: #23e5db;
  color: #002f34;
}

.message-content p {
  margin: 0 0 4px 0;
  font-size: 15px;
  line-height: 1.4;
}

.message-time {
  font-size: 12px;
  color: #406367;
  display: block;
  text-align: right;
}

.message-sent .message-time {
  color: #002f34;
}

.message-input-container {
  padding: 16px;
  border-top: 1px solid #e5e9eb;
  background: white;
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f2f4f5;
  padding: 8px 16px;
  border-radius: 8px;
}

.attachment-button,
.send-button {
  background: transparent;
  border: none;
  color: #002f34;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.attachment-button:hover,
.send-button:hover {
  background: #e5e9eb;
}

.send-button:disabled {
  color: #406367;
  cursor: not-allowed;
}

input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 8px 0;
  font-size: 15px;
  color: #002f34;
  outline: none;
}

input::placeholder {
  color: #406367;
}

@media (max-width: 768px) {
  .chat-view {
    height: 100vh;
  }

  .product-info {
    flex-wrap: wrap;
  }

  .product-image {
    width: 48px;
    height: 48px;
  }

  .view-ad-button {
    width: 100%;
    text-align: center;
    margin-top: 8px;
  }

  .message {
    max-width: 85%;
  }
}
</style>
