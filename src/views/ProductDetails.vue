<template>
  <div class="" v-if="product">
    <div class="product-details-wrapper">
      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <span>{{ t('productDetails.home') }}</span>
        <span class="separator">/</span>
        <span>Telefonlar</span>
        <span class="separator">/</span>
        <span class="current">{{ product.title }}</span>
      </div>

      <div class="product-main-content">
        <!-- Left Column - Images -->
        <div class="product-gallery">
          <div class="product-images">
            <div class="main-image-container">
              <button class="slider-button prev" @click="prevImage" v-if="product.images && product.images.length > 1">
                <svg xmlns="http://www.w3.org/2000/svg" class="slider-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <img 
                :src="product.images[activeImageIndex]" 
                :alt="product.title" 
                class="main-product-image"
                @click="nextImage"
              />
              <button class="slider-button next" @click="nextImage" v-if="product.images && product.images.length > 1">
                <svg xmlns="http://www.w3.org/2000/svg" class="slider-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div class="image-pagination" v-if="product.images && product.images.length > 1">
                {{ activeImageIndex + 1 }} / {{ product.images.length }}
              </div>
            </div>
            <div class="thumbnails-horizontal">
              <div
                v-for="(image, index) in product.images"
                :key="index"
                class="thumbnail-item"
                :class="{ active: index === activeImageIndex }"
                @click="setActiveImage(index)"
              >
                <img :src="image" :alt="product.title" />
              </div>
            </div>
          </div>
        </div>
        <!-- Right Column - Product Info -->
        <div class="product-info-container">
          <div class="product-header">
            <h1 class="product-title">{{ product.title }}</h1>
            <div class="product-rating">
              <div class="stars">
                <span class="star-icon">★</span>
                <span class="rating-value">4.8</span>
                <span class="reviews-count">(12 {{ t('productDetails.reviews') }})</span>
              </div>
              <div class="product-id">ID: {{ product.id }}</div>
            </div>
          </div>

          <div class="price-section">
            <div class="current-price">{{ product.price }}</div>
            <div class="price-note">{{ t('productDetails.pricePerUnit') }}</div>
          </div>

          <div class="seller-section">
            <div class="seller-info">
              <div class="seller-avatar">{{ product.seller.name[0] }}</div>
              <div class="seller-details">
                <h3 class="seller-name">{{ product.seller.name }}</h3>
                <div class="seller-rating">
                  <span class="star-icon small">★</span>
                  <span>{{ product.seller.rating }}</span>
                </div>
                <p class="seller-status">Online</p>
              </div>
            </div>
            
            <div class="action-buttons">
              <button class="primary-button flex items-center justify-center gap-1.5" @click="showPhoneNumber = !showPhoneNumber">
                <span>{{ showPhoneNumber ? phoneNumber : t('productDetails.showPhoneNumber') }}</span>
              </button>
              <button class="secondary-button" @click="router.push('/messages')">
                {{ t('productDetails.sendMessage') }}
              </button>
            </div>
          </div>

          <div class="product-details-section">
            <div class="details-header">{{ t('productDetails.aboutProduct') }}</div>
            <div class="details-grid">
              <div class="detail-item">
                <span class="detail-label">{{ t('productDetails.condition') }}:</span>
                <span class="detail-value">{{ t('productDetails.ideal') }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">{{ t('productDetails.memory') }}:</span>
                <span class="detail-value">256GB</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">{{ t('productDetails.battery') }}:</span>
                <span class="detail-value">100%</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">{{ t('productDetails.warranty') }}:</span>
                <span class="detail-value">6 oy</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">{{ t('productDetails.location') }}:</span>
                <span class="detail-value">{{ product.location }}</span>
              </div>
            </div>
          </div>          
        </div>
        <div class="description-section" v-if="product.description">
          <div class="section-header">
            <h2>{{ t('productDetails.description') }}</h2>
          </div>
          <p class="description-text">{{ product.description }}</p>
        </div>
        <div class="location-section">
          <div class="section-header">
            <h2>{{ t('productDetails.location') }}</h2>
          </div>
          <!-- <div class="location-info">
            <div class="map-container">
              <iframe 
                src="https://yandex.uz/maps/-/CCUNyPWoWA"
                width="100%" 
                height="300" 
                frameborder="0"
                loading="lazy"
                allowfullscreen
              ></iframe>
            </div>
            <div class="location-text">
              <span>{{ product.location || 'Toshkent, Uzbekistan' }}</span>
            </div>
          </div> -->
        </div>        
      </div>
    </div>
  </div>
  <!-- Similar Products Section -->
  <div class="similar-products-section">
    <div class="section-header">
      <h2>{{ t('productDetails.similarProducts') }}</h2>
    </div>
    <div class="swiper">
      <Swiper
        :modules="[Navigation]"
        :slides-per-view="5"
        :space-between="20"
        :navigation="true"
        class="similar-products-slider"
        :breakpoints="{
          '320': {
            slidesPerView: 2,
            spaceBetween: 10
          },
          '480': {
            slidesPerView: 2,
            spaceBetween: 15
          },
          '640': {
            slidesPerView: 3,
            spaceBetween: 15
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 20
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 20
          }
        }"
      >
        <SwiperSlide v-for="item in similarProducts" :key="item.id">
          <div class="product-card">
            <router-link :to="'/product/' + item.id">
              <div class="product-image-wrapper">
                <img :src="item.image" :alt="item.title">
                <button class="favorite-btn" @click.prevent="toggleFavorite(item.id)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                </button>
              </div>
              <div class="product-info">
                <h3 class="product-title">{{ item.title }}</h3>
                <p class="product-price">{{ formatPrice(item.price) }} so'm</p>
              </div>
            </router-link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  
  

  <!-- <div v-else class="loading-container">
    <div class="loading-spinner"></div>
    <p>Ma'lumotlar yuklanmoqda...</p>
  </div> -->

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { PhoneIcon } from '@heroicons/vue/24/solid'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const activeImageIndex = ref(0)
const product = ref(null)

// Phone number visibility state
const showPhoneNumber = ref(false)
const phoneNumber = '+998901234567'

// Similar products data
const similarProducts = ref([
  {
    id: 1,
    title: 'iPhone 14 Pro Max 256GB',
    price: 12500000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha'
  },
  {
    id: 2,
    title: 'iPhone 14 Pro 256GB',
    price: 11800000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-silver-select?wid=940&hei=1112&fmt=png-alpha'
  },
  {
    id: 3,
    title: 'iPhone 13 Pro Max 256GB',
    price: 10500000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha'
  },
  {
    id: 4,
    title: 'iPhone 13 Pro 256GB',
    price: 9800000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=940&hei=1112&fmt=png-alpha'
  },
  {
    id: 5,
    title: 'iPhone 14 128GB',
    price: 9200000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select?wid=940&hei=1112&fmt=png-alpha'
  },
  {
    id: 6,
    title: 'iPhone 13 128GB',
    price: 8500000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select?wid=940&hei=1112&fmt=png-alpha'
  }
])

const setActiveImage = (index) => {
  activeImageIndex.value = index
}

const nextImage = () => {
  if (product.value && product.value.images) {
    activeImageIndex.value = (activeImageIndex.value + 1) % product.value.images.length
  }
}

const prevImage = () => {
  if (product.value && product.value.images) {
    activeImageIndex.value = activeImageIndex.value === 0 
      ? product.value.images.length - 1 
      : activeImageIndex.value - 1
  }
}

const toggleFavorite = (id) => {
  console.log('Toggle favorite for product:', id)
}

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Bu yerda API dan product ma'lumotlarini olish kerak
onMounted(() => {
  // API call o'rniga
  product.value = {
    id: route.params.id,
    title: 'iPhone 13 Pro Max 256GB',
    price: '10,000,000 so\'m',
    location: 'Toshkent, Chilonzor',
    date: '2 soat oldin',
    mainImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha',
    images: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=940&hei=1112&fmt=png-alpha',
    ],
    description: `• Holati: Ideal
• Xotira: 256GB
• Batareya quvvati: 100%
• Komplekt: Telefon, zaryadka moslamasi, quti
• Kafolat: 6 oy`,
    seller: {
      name: 'Apple Store',
      rating: 4.9
    }
  }
})
</script>

<style scoped>
.product-details-container {
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.product-details-wrapper {
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
}

.breadcrumb {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.product-main-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .product-main-content {
    grid-template-columns: 1fr 1fr;
  }
}

.product-gallery {
  width: 100%;
}

.main-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.main-product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #f5f5f5;
}

.thumbnails-horizontal {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 0.5rem;
  margin-top: 1rem;
}

.thumbnail-item {
  aspect-ratio: 1;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
}

.thumbnail-item.active {
  border-color: #007bff;
}

.thumbnail-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info-container {
  width: 100%;
}

.product-header {
  margin-bottom: 1.5rem;
}

.product-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

@media (min-width: 768px) {
  .product-title {
    font-size: 2rem;
  }
}

.price-section {
  margin-bottom: 1.5rem;
}

.current-price {
  font-size: 1.75rem;
  font-weight: bold;
  color: #1a1a1a;
}

.seller-section {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.seller-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.seller-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media (min-width: 480px) {
  .action-buttons {
    flex-direction: row;
  }
}

.primary-button,
.secondary-button {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
}

.primary-button {
  background: #007bff;
  color: white;
}

.secondary-button {
  background: #e9ecef;
  color: #1a1a1a;
}

.product-details-section {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 480px) {
  .details-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.detail-label {
  color: #62656a;
  font-size: 0.875rem;
}

.description-section,
.location-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #dee2e6;
}

.map-container {
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 1px solid #dee2e6;
}

.map-container iframe {
  border: none;
}

.location-text {
  font-size: 1rem;
  color: #1a1a1a;
  padding: 0.5rem;
}

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: all 0.2s ease;
}

.prev {
  left: 1rem;
}

.next {
  right: 1rem;
}

.slider-icon {
  width: 24px;
  height: 24px;
}

.image-pagination {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 1rem;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.similar-products-section {
  margin: 40px 0;
  padding: 0 20px;
}

.section-header {
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 24px;
  font-weight: 600;
  color: #212121;
}

.swiper-container {
  position: relative;
  padding: 0 40px;
}

.similar-products-slider {
  position: relative;
}

.product-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  border: 1px solid #e5e5e5;
}

.product-card:hover {
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.product-image-wrapper {
  position: relative;
  padding-top: 100%;
  overflow: hidden;
}

.product-image-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image-wrapper img {
  transform: scale(1.05);
}

.product-info {
  padding: 12px;
}

.product-title {
  font-size: 14px;
  font-weight: 500;
  color: #212121;
  margin-bottom: 8px;
  line-height: 1.4;
  height: 40px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-price {
  font-size: 16px;
  font-weight: 600;
  color: #212121;
  margin: 0;
}

.favorite-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  transition: all 0.2s ease;
}

.favorite-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.favorite-btn svg {
  color: #7000FF;
}

/* Swiper Navigation Styles */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  width: 32px;
  height: 32px;
  background: #7000FF;
  border-radius: 50%;
  color: white;
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
  font-size: 14px;
  font-weight: bold;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: #5c00d6;
}

:deep(.swiper-button-disabled) {
  background: #e5e5e5;
  opacity: 1;
}

@media (max-width: 768px) {
  .similar-products-section {
    padding: 0 10px;
  }

  .swiper-container {
    padding: 0 30px;
  }

  .section-header h2 {
    font-size: 20px;
  }

  .product-title {
    font-size: 13px;
  }

  .product-price {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .swiper-container {
    padding: 0 25px;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    width: 28px;
    height: 28px;
  }

  :deep(.swiper-button-next:after),
  :deep(.swiper-button-prev:after) {
    font-size: 12px;
  }
}
</style>
