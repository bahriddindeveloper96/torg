<template>
  <router-link :to="{ name: 'ProductDetails', params: { id: product.id }}" class="product-card-link">
    <div class="product-card">
      <div class="product-image">
        <img :src="product.image" :alt="product.title" class="product-img" />
        <button class="favorite-btn" :class="{ active: product.isFavorite }" @click.prevent="toggleFavorite">
          <svg class="heart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <div class="badges" v-if="isNew">
          <span class="badge">{{ t('product.new') }}</span>
        </div>
      </div>
      
      <div class="product-info">
        <div class="price-block">
          <p class="current-price">{{ product.price }}</p>
          <!-- <p class="monthly-price" v-if="monthlyPrice">
            <span class="monthly-amount">{{ monthlyPrice }} so'm</span>
            <span class="monthly-text">{{ t('product.monthlyPayment') }}</span>
          </p> -->
        </div>

        <h3 class="product-title">{{ product.title }}</h3>
        
        <div class="product-meta">
          <div class="location">
            <svg class="location-icon" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
            </svg>
            {{ product.location }}
          </div>
          <div class="date">{{ product.date }}</div>
        </div>        
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggleFavorite'])

const isNew = computed(() => {
  if (!props.product.date) return false;
  const productDate = new Date(props.product.date);
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
  return productDate > threeDaysAgo;
});

const monthlyPrice = computed(() => {
  const priceStr = props.product.price;
  if (!priceStr) return null;
  
  // Extract numeric value from price string
  const numericPrice = parseInt(priceStr.replace(/[^0-9]/g, ''));
  if (numericPrice < 100000) return null;
  
  // Calculate monthly price
  const monthly = Math.ceil(numericPrice / 12);
  return new Intl.NumberFormat('uz-UZ').format(monthly);
});

const toggleFavorite = () => {
  emit('toggleFavorite', props.product.id)
}
</script>

<style scoped>
.product-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.product-image {
  position: relative;
  padding-top: 100%;
  background: #f5f5f7;
  overflow: hidden;
}

.product-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-img {
  transform: scale(1.05);
}

.favorite-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.favorite-btn:hover {
  transform: scale(1.1);
  background: #fff5f5;
}

.heart-icon {
  width: 20px;
  height: 20px;
  color: #666;
  transition: all 0.2s ease;
}

.favorite-btn.active .heart-icon {
  fill: #ff4b4b;
  color: #ff4b4b;
}

.badges {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  display: flex;
  gap: 8px;
}

.badge {
  background: #7000FF;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.product-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
}

.price-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.current-price {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1F1F26;
  margin: 0;
}

.monthly-price {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
}

.monthly-amount {
  font-size: 0.875rem;
  color: #7000FF;
  font-weight: 500;
}

.monthly-text {
  font-size: 0.75rem;
  color: #62656A;
}

.product-title {
  font-size: 0.875rem;
  font-weight: 400;
  color: #1F1F26;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #62656A;
  margin-top: auto;
}

.location {
  display: flex;
  align-items: center;
  gap: 4px;
}

.location-icon {
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.date {
  color: #999;
}
</style>
