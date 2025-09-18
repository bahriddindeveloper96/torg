<template>
  <router-link :to="{ name: 'ProductDetails', params: { id: product.id }}" class="product-card-link">
    <div class="product-card">
      <div class="product-image">
        <img :src="product.image" :alt="product.title" class="w-full h-full object-cover" />
        <div v-if="product.badges && product.badges.length" class="badges">
          <span v-for="badge in product.badges" :key="badge" class="badge">{{ badge }}</span>
        </div>
        <button class="favorite-btn" :class="{ active: product.isFavorite }" @click.prevent="toggleFavorite">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div class="product-info">
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-price">{{ product.price }} so'm</p>
        <div class="product-meta">
          <div class="location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 13a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{ product.location }}</span>
          </div>
          <span class="date">{{ product.date }} {{ product.time }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggleFavorite'])

const toggleFavorite = () => {
  emit('toggleFavorite', props.product.id)
}
</script>

<style scoped>
.product-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
  margin-bottom: 12px;
}

.product-card:hover {
  transform: translateY(-2px);
}

.product-image {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background: #f5f5f5;
}

.product-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badges {
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  z-index: 1;
}

.badge {
  background: var(--primary-color, #002f34);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.2;
}

.favorite-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #666;
  transition: all 0.2s;
  z-index: 1;
}

.favorite-btn:hover {
  transform: scale(1.05);
}

.favorite-btn.active {
  color: #ff4b4b;
}

.favorite-btn.active svg {
  fill: currentColor;
}

.favorite-btn svg {
  width: 18px;
  height: 18px;
}

.product-info {
  padding: 10px 12px;
}

.product-title {
  font-size: 14px;
  font-weight: 600;
  color: #000;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
}

.product-price {
  font-size: 15px;
  font-weight: bold;
  color: var(--primary-color, #002f34);
  margin-bottom: 6px;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #666;
}

.location {
  display: flex;
  align-items: center;
  gap: 3px;
  max-width: 60%;
}

.location span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.location svg {
  color: #666;
  flex-shrink: 0;
  width: 14px;
  height: 14px;
}

.date {
  white-space: nowrap;
  font-size: 11px;
}

@media (min-width: 769px) {
  .product-card {
    display: flex;
    margin-bottom: 16px;
  }

  .product-image {
    width: 200px;
    height: 200px;
    padding-bottom: 0;
    border-radius: 12px 0 0 12px;
  }

  .product-info {
    flex: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .product-title {
    font-size: 16px;
    margin-bottom: 6px;
  }

  .product-price {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .product-meta {
    font-size: 12px;
  }

  .location svg {
    width: 16px;
    height: 16px;
  }

  .date {
    font-size: 12px;
  }

  .badge {
    font-size: 12px;
  }

  .favorite-btn {
    width: 36px;
    height: 36px;
  }

  .favorite-btn svg {
    width: 20px;
    height: 20px;
  }
}
</style>
