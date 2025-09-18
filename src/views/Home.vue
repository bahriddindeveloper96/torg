<template>
  <div class="home">
    <div class="">   
      <Categories />

      <section class="">
        <div class="section-header">
          <div class="section-title-wrapper">
            <h2 class="section-title">{{ $t('home.premiumAds') }}</h2>
            <span class="product-count">{{ featuredProducts.length }} {{ $t('home.products') }}</span>
          </div>
          <a href="#" class="view-all">
            {{ $t('home.viewAll') }}
            <i class="fas fa-chevron-right"></i>
          </a>
        </div>
        <div class="products-grid">
          <ProductCard 
            v-for="product in featuredProducts" 
            :key="product.id" 
            :product="product"
            @toggle-favorite="toggleFavorite"
          />
        </div>
      </section>

      <section class="">
        <div class="section-header">
          <div class="section-title-wrapper">
            <h2 class="section-title">{{ $t('home.recentAds') }}</h2>
            <span class="product-count">{{ recentProducts.length }} {{ $t('home.products') }}</span>
          </div>
          <a href="#" class="view-all">
            {{ $t('home.viewAll') }}
            <i class="fas fa-chevron-right"></i>
          </a>
        </div>
        <div class="products-grid">
          <ProductCard 
            v-for="product in recentProducts" 
            :key="product.id" 
            :product="product"
            @toggle-favorite="toggleFavorite"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Categories from '../components/Categories.vue'
import CategoryFilters from '../components/CategoryFilters.vue'
import ProductCard from '../components/ProductCard.vue'

const { t } = useI18n()

const searchQuery = ref('')

const featuredProducts = ref([
  {
    id: 1,
    title: 'iPhone 13 Pro Max 256GB',
    price: '10,000,000 so\'m',
    location: 'Toshkent, Chilonzor',
    date: '2 soat oldin',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800&auto=format',
    isFavorite: false
  },
  {
    id: 2,
    title: 'Samsung Galaxy S21 Ultra',
    price: '8,500,000 so\'m',
    location: 'Toshkent, Yunusobod',
    date: '3 soat oldin',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format',
    isFavorite: true
  },
  {
    id: 5,
    title: 'Samsung Galaxy S21 Ultra',
    price: '8,500,000 so\'m',
    location: 'Toshkent, Yunusobod',
    date: '3 soat oldin',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format',
    isFavorite: true
  },
  {
    id: 3,
    title: '2-xonali kvartira, 65 m²',
    price: '450,000,000 so\'m',
    location: 'Toshkent, Mirobod',
    date: '5 soat oldin',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format',
    isFavorite: false
  },
  {
    id: 4,
    title: 'Chevrolet Malibu 2',
    price: '285,000,000 so\'m',
    location: 'Toshkent, Sergeli',
    date: '1 kun oldin',
    image: 'https://images.unsplash.com/photo-1614200187524-dc44c813f158?w=800&auto=format',
    isFavorite: false
  }
])

const recentProducts = ref([
  {
    id: 5,
    title: 'MacBook Pro 16" M1 Max',
    price: '25,000,000 so\'m',
    location: 'Toshkent, Chilonzor',
    date: '1 soat oldin',
    image: 'https://images.unsplash.com/photo-1639249227523-78502e9a32c6?w=800&auto=format',
    isFavorite: false
  },
  {
    id: 6,
    title: 'PlayStation 5 Digital Edition',
    price: '6,500,000 so\'m',
    location: 'Toshkent, Yunusobod',
    date: '4 soat oldin',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format',
    isFavorite: false
  },
  {
    id: 11,
    title: 'PlayStation 5 Digital Edition',
    price: '6,500,000 so\'m',
    location: 'Toshkent, Yunusobod',
    date: '4 soat oldin',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format',
    isFavorite: false
  },
  {
    id: 7,
    title: 'Ofis stoli va stul to\'plami',
    price: '2,300,000 so\'m',
    location: 'Toshkent, Mirobod',
    date: '6 soat oldin',
    image: 'https://images.unsplash.com/photo-1505797149-35ebcb05a232?w=800&auto=format',
    isFavorite: true
  },
  {
    id: 8,
    title: 'Velosiped Giant XTC',
    price: '4,800,000 so\'m',
    location: 'Toshkent, Bektemir',
    date: '1 kun oldin',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&auto=format',
    isFavorite: false
  }
])

const toggleFavorite = (productId) => {
  const updateProduct = (product) => {
    if (product.id === productId) {
      product.isFavorite = !product.isFavorite
    }
  }
  
  featuredProducts.value.forEach(updateProduct)
  recentProducts.value.forEach(updateProduct)
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.search-section {
  margin-bottom: 24px;
}

.search-container {
  display: flex;
  margin-bottom: 16px;
}

.search-input {
  flex: 1;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px 0 0 8px;
  outline: none;
  transition: border-color 0.2s;
}

.search-input:focus {
  border-color: #007bff;
}

.search-button {
  padding: 12px 24px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-button:hover {
  background: #0056b3;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  padding: 0 0.5rem;
}

.section-title-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.section-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: #1F1F26;
  margin: 0;
}

.product-count {
  font-size: 0.875rem;
  color: #62656A;
}

.view-all {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #7000FF;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.view-all:hover {
  background-color: #F5F5F6;
}

.view-all i {
  font-size: 0.75rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 992px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  
  .section-header {
    padding: 0;
  }
  
  .section-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .products-section {
    padding: 1rem;
  }
}
</style>
