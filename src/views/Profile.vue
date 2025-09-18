<template>
  <div class="profile-container">
    <div class="profile-sidebar">
      <div class="user-info">
        <div class="avatar-wrapper">
          <img :src="userAvatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'" alt="User avatar" class="user-avatar" />
          <div class="avatar-edit">
            <i class="fas fa-camera"></i>
          </div>
        </div>
        <h2 class="user-name">{{ userName || 'User Name' }}</h2>
        <p class="user-email">{{ userEmail || 'user@example.com' }}</p>
      </div>
      <nav class="profile-nav">
        <router-link to="/profile" class="nav-item" active-class="active">
          <i class="fas fa-user"></i> {{ t('profile.navigation.profile') }}
        </router-link>
        <router-link to="/profile/ads" class="nav-item">
          <i class="fas fa-list"></i> {{ t('profile.navigation.ads') }}
        </router-link>
        <router-link to="/profile/favorites" class="nav-item">
          <i class="fas fa-heart"></i> {{ t('profile.navigation.favorites') }}
        </router-link>
        <router-link to="/profile/settings" class="nav-item">
          <i class="fas fa-cog"></i> {{ t('profile.navigation.settings') }}
        </router-link>
      </nav>
    </div>
    
    <div class="profile-content">
      <div class="content-header">
        <h1>{{ t('profile.title') }}</h1>
      </div>
      
      <div class="profile-sections">
        <div class="section">
          <h3>{{ t('profile.personalInfo.title') }}</h3>
          <div class="form-group">
            <label>{{ t('profile.personalInfo.fullName.label') }}</label>
            <input type="text" v-model="userName" :placeholder="t('profile.personalInfo.fullName.placeholder')" />
          </div>
          <div class="form-group">
            <label>{{ t('profile.personalInfo.phone.label') }}</label>
            <input type="tel" v-model="userPhone" :placeholder="t('profile.personalInfo.phone.placeholder')" />
          </div>
          <div class="form-group">
            <label>{{ t('profile.personalInfo.email.label') }}</label>
            <input type="email" v-model="userEmail" :placeholder="t('profile.personalInfo.email.placeholder')" />
          </div>
          <div class="form-group">
            <label>{{ t('profile.personalInfo.address.label') }}</label>
            <input type="text" v-model="userAddress" :placeholder="t('profile.personalInfo.address.placeholder')" />
          </div>
        </div>
        
        <div class="section">
          <h3>{{ t('profile.statistics.title') }}</h3>
          <div class="stats-grid">
            <div class="stat-item">
              <i class="fas fa-ad"></i>
              <span class="stat-value">{{ adsCount || 0 }}</span>
              <span class="stat-label">{{ t('profile.statistics.ads') }}</span>
            </div>
            <div class="stat-item">
              <i class="fas fa-eye"></i>
              <span class="stat-value">{{ viewsCount || 0 }}</span>
              <span class="stat-label">{{ t('profile.statistics.views') }}</span>
            </div>
            <div class="stat-item">
              <i class="fas fa-heart"></i>
              <span class="stat-value">{{ favoritesCount || 0 }}</span>
              <span class="stat-label">{{ t('profile.statistics.favorites') }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="action-buttons">
        <button class="btn-save" @click="saveChanges">{{ t('profile.buttons.save') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'Profile',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      userName: '',
      userEmail: '',
      userPhone: '',
      userAddress: '',
      userAvatar: null,
      adsCount: 0,
      viewsCount: 0,
      favoritesCount: 0
    }
  },
  methods: {
    saveChanges() {
      // TODO: Implement save functionality
      console.log('Saving profile changes...')
    }
  }
}
</script>

<style scoped>
.profile-container {
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.profile-sidebar {
  flex: 0 0 280px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 1.5rem;
}

.user-info {
  text-align: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.avatar-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 1rem;
}

.user-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.avatar-edit {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #007bff;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s;
}

.avatar-edit:hover {
  background: #0056b3;
}

.user-name {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: #333;
}

.user-email {
  color: #666;
  margin: 0;
}

.profile-nav {
  margin-top: 1.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: #666;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: all 0.3s;
}

.nav-item i {
  margin-right: 0.75rem;
  width: 20px;
}

.nav-item:hover, .nav-item.active {
  background: #f0f7ff;
  color: #007bff;
}

.profile-content {
  flex: 1;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 2rem;
}

.content-header {
  margin-bottom: 2rem;
}

.content-header h1 {
  margin: 0;
  color: #333;
  font-size: 1.75rem;
}

.profile-sections {
  display: grid;
  gap: 2rem;
}

.section {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
}

.section h3 {
  margin: 0 0 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #007bff;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.stat-item i {
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 0.5rem;
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

.action-buttons {
  margin-top: 2rem;
  text-align: right;
}

.btn-save {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-save:hover {
  background: #0056b3;
}

@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
  }
  
  .profile-sidebar {
    flex: none;
    width: 100%;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>