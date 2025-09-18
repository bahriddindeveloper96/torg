<template>
  <div class="">
    <!-- Category Header -->
    <header class="category-header">
      <div>
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
          <a href="/" class="breadcrumb-link">{{ t('categoryView.home') }}</a>
          <ChevronRightIcon class="breadcrumb-icon" />
          <span>{{ category }}</span>
        </nav>
        
        <div class="header-content">
          <div>
            <h1 class="category-title">{{ category }}</h1>
            <span class="stats-count">{{ productsCount }} {{ t('categoryView.ads') }}</span>
          </div>
          <button class="filter-button md:hidden" @click="showFilters = true">
            <FunnelIcon class="w-6 h-6" />
            <span>{{ t('categoryView.filter') }}</span>
          </button>
        </div>

        <!-- Desktop Filters -->
        <div class="hidden md:block">
          <CategoryFilters
            v-model:filters="filters"
            @update:filters="handleFiltersUpdate"
            :filterLabels="{
              priceFrom: t('categoryView.filters.priceFrom'),
              priceTo: t('categoryView.filters.priceTo'),
              brand: t('categoryView.filters.brand'),
              yearFrom: t('categoryView.filters.yearFrom'),
              yearTo: t('categoryView.filters.yearTo')
            }"
          />
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="">
      <!-- Products Grid -->
      <div class="products-grid">
        <CategoryCard 
          v-for="product in filteredProducts" 
          :key="product.id"
          :product="formatProduct(product)"
          @toggle-favorite="toggleFavorite"
        />
      </div>

      <!-- Load More -->
      <div class="load-more">
        <button class="btn-load" @click="loadMore">
          {{ t('categoryView.loadMore') }}
          <ArrowDownIcon class="icon" />
        </button>
      </div>
    </main>
  </div>

  <!-- Backdrop -->
  <div v-if="showFilters" 
       class="backdrop" 
       @click="showFilters = false">
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { 
  ChevronRightIcon,
  ArrowDownIcon,
  FunnelIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import CategoryCard from '../components/CategoryCard.vue'
import CategoryFilters from '../components/CategoryFilters.vue'

const { t } = useI18n()

// Category and count
const category = ref('Avtomobillar')
const productsCount = ref(1234)

// Products data
const products = ref([
  {
    id: 1,
    title: 'Chevrolet Malibu 2 Premier',
    price: 380000000,
    location: 'Toshkent',
    date: 'today',
    time: '12:45',
    image: 'https://picsum.photos/500/300',
    isFavorite: false,
    year: 2023,
    mileage: '0',
    badges: ['Premium', 'Top']
  },
  {
    id: 2,
    title: 'Toyota Camry 3.5',
    price: 420000000,
    location: 'Toshkent',
    date: 'yesterday',
    time: '15:30',
    image: 'https://picsum.photos/500/300',
    isFavorite: true,
    year: 2022,
    mileage: '25000',
    badges: ['Premium']
  },
  {
    id: 3,
    title: 'Hyundai Sonata',
    price: 310000000,
    location: 'Andijon',
    date: 'yesterday',
    time: '10:15',
    image: 'https://picsum.photos/500/300',
    isFavorite: false,
    year: 2021,
    mileage: '45000',
    badges: []
  },
  {
    id: 4,
    title: 'Kia K5 GT-Line',
    price: 350000000,
    location: 'Toshkent',
    date: 'today',
    time: '09:20',
    image: 'https://picsum.photos/500/300',
    isFavorite: false,
    year: 2022,
    mileage: '15000',
    badges: ['Premium']
  }
])

// Format product data with translations
const formatProduct = (product) => {
  const formattedDate = product.date === 'today' 
    ? `${t('categoryView.today')} ${product.time}`
    : `${t('categoryView.yesterday')} ${product.time}`

  return {
    ...product,
    date: formattedDate,
    mileage: `${product.mileage} ${t('categoryView.km')}`
  }
}

// Filtr holati
const filters = ref({
  priceFrom: '',
  priceTo: '',
  brand: '',
  yearFrom: '',
  yearTo: ''
})

// Filtrlangan mahsulotlar
const filteredProducts = computed(() => {
  let result = products.value

  if (filters.value.brand) {
    result = result.filter(product => 
      product.title.toLowerCase().includes(filters.value.brand.toLowerCase())
    )
  }

  if (filters.value.yearFrom && filters.value.yearTo) {
    result = result.filter(product => 
      product.year >= Number(filters.value.yearFrom) && 
      product.year <= Number(filters.value.yearTo)
    )
  }

  if (filters.value.priceFrom && filters.value.priceTo) {
    result = result.filter(product => 
      product.price >= Number(filters.value.priceFrom) && 
      product.price <= Number(filters.value.priceTo)
    )
  }

  return result
})

// Filtrlar o'zgarishini qayta ishlash
const handleFiltersUpdate = (newFilters) => {
  filters.value = newFilters
}

// Sevimlilarni boshqarish
const toggleFavorite = (productId) => {
  const product = products.value.find(p => p.id === productId)
  if (product) {
    product.isFavorite = !product.isFavorite
  }
}

// Ko'proq mahsulot yuklash
const loadMore = () => {
  // Load more products logic
  console.log('Loading more products...')
}

const showFilters = ref(false)
</script>

<style scoped>
.category-header {
  background: white;
  padding: 1.5rem;
  margin-bottom: 0.75rem;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.breadcrumb-link {
  color: #666;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: #333;
}

.breadcrumb-icon {
  width: 16px;
  height: 16px;
  color: #666;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.stats-count {
  color: #666;
  font-size: 0.875rem;
}

.products-section {
  padding: 0 0.5rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .products-section {
    padding: 0 1rem;
  }
}

.btn-load {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  color: #666;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-load:hover {
  background: #f9fafb;
  border-color: #d1d5db;
  color: #333;
}

.btn-load .icon {
  width: 18px;
  height: 18px;
}

.filter-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  color: #666;
}

.filter-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 320px;
  background: white;
  z-index: 50;
  padding: 1rem;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 40;
}

@media (min-width: 768px) {
  .filter-button {
    display: none;
  }
}
</style>
