<template>
  <div class="filters-container">
    <!-- Filters Section -->
    <div class="filters-section">
      <!-- Price Filter -->
      <div class="filter-group">
        <label>{{ t('categoryFilters.price') }}</label>
        <div class="price-inputs">
          <input type="number" class="filter-input" :placeholder="t('categoryFilters.from')" v-model="filters.priceFrom" />
          <span class="separator">-</span>
          <input type="number" class="filter-input" :placeholder="t('categoryFilters.to')" v-model="filters.priceTo" />
          <span class="currency">{{ t('categoryFilters.currency') }}</span>
        </div>
      </div>

      <!-- Brand Filter -->
      <div class="filter-group">
        <label>{{ t('categoryFilters.brand') }}</label>
        <select class="filter-select" v-model="filters.brand">
          <option value="">{{ t('categoryFilters.all') }}</option>
          <option v-for="brand in brands" :key="brand" :value="brand">{{ brand }}</option>
        </select>
      </div>

      <!-- Year Filter -->
      <div class="filter-group">
        <label>{{ t('categoryFilters.year') }}</label>
        <div class="year-inputs">
          <select class="filter-select" v-model="filters.yearFrom">
            <option value="">{{ t('categoryFilters.from') }}</option>
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
          <span class="separator">-</span>
          <select class="filter-select" v-model="filters.yearTo">
            <option value="">{{ t('categoryFilters.to') }}</option>
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>
      </div>

      <!-- Search Button -->
      <button class="btn-search" @click="applyFilters">
        <MagnifyingGlassIcon class="icon" />
        {{ t('categoryFilters.search') }}
      </button>
    </div>

    <!-- Active Filters -->
    <div class="active-filters" v-if="activeFilters.length">
      <div class="filter-tags">
        <button v-for="filter in activeFilters" 
                :key="filter.id" 
                class="filter-tag">
          {{ filter.text }}
          <XMarkIcon class="tag-close" @click="removeFilter(filter.id)" />
        </button>
      </div>
      <button class="btn-clear" @click="clearFilters">
        {{ t('categoryFilters.clearAllFilters') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const { t } = useI18n()

const props = defineProps({
  initialFilters: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:filters'])

const filters = ref({
  priceFrom: '',
  priceTo: '',
  brand: '',
  yearFrom: '',
  yearTo: '',
  ...props.initialFilters
})

// Generate years from 1970 to current year
const years = computed(() => {
  const currentYear = new Date().getFullYear()
  return Array.from({ length: currentYear - 1970 + 1 }, (_, i) => currentYear - i)
})

const brands = [
  'Chevrolet',
  'Toyota',
  'Hyundai',
  'Kia',
  'BMW',
  'Mercedes-Benz'
]

const activeFilters = computed(() => {
  const result = []
  if (filters.value.priceFrom && filters.value.priceTo) {
    result.push({
      id: 'price',
      text: `${filters.value.priceFrom} - ${filters.value.priceTo} ${t('categoryFilters.currency')}`
    })
  }
  if (filters.value.brand) {
    result.push({
      id: 'brand',
      text: filters.value.brand
    })
  }
  if (filters.value.yearFrom && filters.value.yearTo) {
    result.push({
      id: 'year',
      text: `${filters.value.yearFrom} - ${filters.value.yearTo}`
    })
  }
  return result
})

const removeFilter = (id) => {
  switch (id) {
    case 'price':
      filters.value.priceFrom = ''
      filters.value.priceTo = ''
      break
    case 'brand':
      filters.value.brand = ''
      break
    case 'year':
      filters.value.yearFrom = ''
      filters.value.yearTo = ''
      break
  }
  applyFilters()
}

const clearFilters = () => {
  filters.value = {
    priceFrom: '',
    priceTo: '',
    brand: '',
    yearFrom: '',
    yearTo: ''
  }
  applyFilters()
}

const applyFilters = () => {
  emit('update:filters', { ...filters.value })
}
</script>

<style scoped>
.filters-container {
  border-top: 1px solid #e2e8f0;
  padding-top: 1.5rem;
}

.filters-section {
  display: flex;
  gap: 1.5rem;
  align-items: flex-end;
  margin-bottom: 1.5rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
}

.price-inputs,
.year-inputs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-input,
.filter-select {
  height: 2.5rem;
  padding: 0 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  background: white;
  font-size: 0.875rem;
  color: #0f172a;
  transition: all 0.2s;
}

.filter-input {
  width: 120px;
}

.filter-select {
  width: 160px;
}

.filter-input:focus,
.filter-select:focus {
  outline: none;
  border-color: #94a3b8;
  box-shadow: 0 0 0 3px rgba(148, 163, 184, 0.1);
}

.separator {
  color: #94a3b8;
  font-weight: 500;
}

.currency {
  color: #64748b;
  font-size: 0.875rem;
}

.btn-search {
  height: 2.5rem;
  padding: 0 1.5rem;
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
  margin-left: auto;
}

.btn-search:hover {
  background: #1e293b;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-search .icon {
  width: 1.25rem;
  height: 1.25rem;
}

.active-filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.filter-tags {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.filter-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #0f172a;
  transition: all 0.2s;
}

.filter-tag:hover {
  border-color: #94a3b8;
  transform: translateY(-1px);
}

.tag-close {
  width: 1.25rem;
  height: 1.25rem;
  color: #64748b;
  transition: color 0.2s;
}

.tag-close:hover {
  color: #ef4444;
}

.btn-clear {
  padding: 0.5rem 1rem;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 500;
  background: none;
  border: none;
  transition: color 0.2s;
}

.btn-clear:hover {
  color: #ef4444;
}

@media (max-width: 1024px) {
  .filters-section {
    flex-wrap: wrap;
  }
  
  .btn-search {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .filter-group {
    width: 100%;
  }
  
  .filter-input,
  .filter-select {
    width: 100%;
  }
  
  .price-inputs,
  .year-inputs {
    width: 100%;
  }
}
</style>
