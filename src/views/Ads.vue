
<template>
  <div class="ads-container">
    <div class="ads-header">
      <h1>{{ t('ads.title') }}</h1>
      <div class="header-actions">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="text" v-model="searchQuery" :placeholder="t('ads.search.placeholder')" />
        </div>
        <div class="filter-dropdown">
          <select v-model="filterStatus" class="custom-select">
            <option value="all">{{ t('ads.filter.all') }}</option>
            <option value="active">{{ t('ads.filter.active') }}</option>
            <option value="inactive">{{ t('ads.filter.inactive') }}</option>
            <option value="moderation">{{ t('ads.filter.moderation') }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="stat-info">
          <span class="stat-value">{{ activeAds }}</span>
          <span class="stat-label">{{ t('ads.stats.activeAds') }}</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-eye"></i>
        </div>
        <div class="stat-info">
          <span class="stat-value">{{ totalViews }}</span>
          <span class="stat-label">{{ t('ads.stats.totalViews') }}</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-phone"></i>
        </div>
        <div class="stat-info">
          <span class="stat-value">{{ totalCalls }}</span>
          <span class="stat-label">{{ t('ads.stats.totalCalls') }}</span>
        </div>
      </div>
    </div>

    <!-- Ads Grid -->
    <div class="ads-grid">
      <div v-for="ad in filteredAds" :key="ad.id" class="ad-card">
        <div class="ad-image">
          <img :src="ad.image" :alt="ad.title" />
          <div class="ad-badges">
            <span v-if="ad.status === 'active'" class="badge badge-success">{{ t('ads.status.active') }}</span>
            <span v-else-if="ad.status === 'inactive'" class="badge badge-danger">{{ t('ads.status.inactive') }}</span>
            <span v-else class="badge badge-warning">{{ t('ads.status.moderation') }}</span>
          </div>
          <div class="ad-actions">
            <button class="action-btn edit" @click="editAd(ad.id)" :title="t('ads.buttons.edit')">
              <i class="fas fa-edit"></i>
            </button>
            <button class="action-btn delete" @click="deleteAd(ad.id)" :title="t('ads.buttons.delete')">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <div class="ad-content">
          <h3 class="ad-title">{{ ad.title }}</h3>
          <p class="ad-price">{{ formatPrice(ad.price) }} {{ t('ads.currency') }}</p>
          <div class="ad-meta">
            <span class="meta-item">
              <i class="fas fa-eye"></i> {{ ad.views }}
            </span>
            <span class="meta-item">
              <i class="fas fa-phone"></i> {{ ad.calls }}
            </span>
            <span class="meta-item">
              <i class="fas fa-calendar"></i> {{ formatDate(ad.date) }}
            </span>
          </div>
          <div class="ad-controls">
            <button 
              class="toggle-status" 
              :class="{ 'active': ad.status === 'active' }"
              @click="toggleAdStatus(ad.id)"
            >
              {{ ad.status === 'active' ? t('ads.status.active') : t('ads.buttons.activate') }}
            </button>
            <button class="btn-promote" @click="promoteAd(ad.id)">
              <i class="fas fa-rocket"></i> {{ t('ads.buttons.promote') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredAds.length === 0" class="empty-state">
      <i class="fas fa-clipboard-list"></i>
      <h3>{{ t('ads.emptyState.title') }}</h3>
      <p>{{ t('ads.emptyState.description') }}</p>
      <button class="btn-create-ad" @click="createNewAd">
        <i class="fas fa-plus"></i> {{ t('ads.emptyState.createButton') }}
      </button>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'Ads',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      searchQuery: '',
      filterStatus: 'all',
      activeAds: 5,
      totalViews: 1234,
      totalCalls: 89,
      ads: [
        {
          id: 1,
          title: 'iPhone 13 Pro Max',
          price: 12000000,
          image: 'https://picsum.photos/300/200',
          status: 'active',
          views: 156,
          calls: 12,
          date: new Date('2024-02-15')
        },
        {
          id: 2,
          title: 'Samsung Galaxy S21',
          price: 8500000,
          image: 'https://picsum.photos/300/200',
          status: 'inactive',
          views: 89,
          calls: 5,
          date: new Date('2024-02-10')
        },
        {
          id: 3,
          title: 'MacBook Pro M1',
          price: 15000000,
          image: 'https://picsum.photos/300/200',
          status: 'moderation',
          views: 45,
          calls: 3,
          date: new Date('2024-02-18')
        }
      ]
    }
  },
  computed: {
    filteredAds() {
      return this.ads
        .filter(ad => {
          if (this.filterStatus === 'all') return true
          return ad.status === this.filterStatus
        })
        .filter(ad => {
          if (!this.searchQuery) return true
          return ad.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        })
    }
  },
  methods: {
    formatPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    },
    formatDate(date) {
      const locale = this.$i18n.locale
      return new Date(date).toLocaleDateString(locale === 'uz' ? 'uz-UZ' : 'ru-RU', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    editAd(id) {
      console.log('Editing ad:', id)
    },
    deleteAd(id) {
      console.log('Deleting ad:', id)
    },
    toggleAdStatus(id) {
      console.log('Toggling ad status:', id)
    },
    promoteAd(id) {
      console.log('Promoting ad:', id)
    },
    createNewAd() {
      console.log('Creating new ad')
    }
  }
}
</script>

<style scoped>
.ads-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.ads-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.ads-header h1 {
  font-size: 2rem;
  color: #333;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.search-box {
  position: relative;
  width: 300px;
}

.search-box i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.search-box input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.search-box input:focus {
  outline: none;
  border-color: #007bff;
}

.custom-select {
  padding: 0.75rem 2rem 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  min-width: 150px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: #f0f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon i {
  font-size: 1.5rem;
  color: #007bff;
}

.stat-info {
  flex: 1;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.stat-label {
  color: #666;
  font-size: 0.875rem;
}

.ads-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.ad-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.ad-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.ad-image {
  position: relative;
  height: 200px;
}

.ad-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ad-badges {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  gap: 0.5rem;
}

.badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
}

.badge-success {
  background: #28a745;
}

.badge-danger {
  background: #dc3545;
}

.badge-warning {
  background: #ffc107;
  color: #000;
}

.ad-actions {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.ad-card:hover .ad-actions {
  opacity: 1;
}

.action-btn {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background: white;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.action-btn:hover {
  transform: scale(1.1);
}

.action-btn.edit:hover {
  background: #007bff;
  color: white;
}

.action-btn.delete:hover {
  background: #dc3545;
  color: white;
}

.ad-content {
  padding: 1.5rem;
}

.ad-title {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  color: #333;
}

.ad-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
  margin: 0 0 1rem;
}

.ad-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.meta-item {
  color: #666;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.ad-controls {
  display: flex;
  gap: 1rem;
}

.toggle-status {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.toggle-status.active {
  background: #28a745;
  color: white;
  border-color: #28a745;
}

.btn-promote {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background: #007bff;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-promote:hover {
  background: #0056b3;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.empty-state i {
  font-size: 4rem;
  color: #ddd;
  margin-bottom: 1rem;
}

.empty-state h3 {
  font-size: 1.5rem;
  color: #333;
  margin: 0 0 0.5rem;
}

.empty-state p {
  color: #666;
  margin: 0 0 2rem;
}

.btn-create-ad {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  background: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s;
}

.btn-create-ad:hover {
  background: #0056b3;
}

@media (max-width: 768px) {
  .ads-header {
    flex-direction: column;
    align-items: stretch;
  }
  
  .header-actions {
    flex-direction: column;
  }
  
  .search-box {
    width: 100%;
  }
  
  .custom-select {
    width: 100%;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .ads-grid {
    grid-template-columns: 1fr;
  }
}
</style>