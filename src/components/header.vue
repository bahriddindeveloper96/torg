<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="header-top-content">
          <div class="language-selector">
            <button class="lang-btn" @click="toggleLanguageMenu">
              <span>{{ currentLanguage.label }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="language-menu" v-if="isLanguageMenuOpen">
              <button 
                v-for="lang in languages" 
                :key="lang.code"
                class="language-option"
                :class="{ active: currentLocale === lang.code }"
                @click="changeLanguage(lang.code)"
              >
                {{ lang.label }}
              </button>
            </div>
          </div>
          <nav class="top-nav">
            <a href="#" class="top-nav-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 18H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ $t('header.mobileApps') }}</span>
            </a>
            <a href="#" class="top-nav-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.58172 17.5228 3 12 3C6.58172 3 3 6.58172 3 12C3 17.5228 6.58172 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 17H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ $t('header.help') }}</span>
            </a>
          </nav>
        </div>
      </div>
    </div>

    <div class="header-main">
      <div class="container">
        <!-- Desktop View -->
        <div class="header-main-content desktop-view">
          <div class="logo-section">
            <router-link to="/" class="logo">
              <span class="logo-text">TORG</span>
              <span class="logo-dot">.</span>
              <span class="logo-uz">uz</span>
            </router-link>
          </div>

          <div class="search-section">
            <div class="search-container">
              <div class="search-input-container">
                <input 
                  type="text" 
                  :placeholder="$t('header.search')"
                  class="search-input"
                />
                <button class="search-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="auth-section">
            <router-link to="/favorites" class="action-btn">
              <div class="btn-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span>{{ $t('header.favorites') }}</span>
            </router-link>
            <router-link to="/profile" class="action-btn">
              <div class="btn-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span>{{ $t('header.profile') }}</span>
            </router-link>
            <router-link to="/add-product" class="post-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ $t('header.postAd') }}</span>
            </router-link>
          </div>
        </div>

        <!-- Mobile View -->
        <div class="header-main-content mobile-view">
          <div class="search-section">
            <form @submit.prevent class="search-form">
              <div class="search-input-container">
                <input 
                  type="text" 
                  :placeholder="$t('header.search')"
                  class="search-input"
                />
                <button type="submit" class="search-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          
          <button class="notification-btn">
            <div class="notification-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="notification-badge"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
const currentLocale = computed(() => locale.value)

const languages = [
  { code: 'uz', label: t('header.languages.uz') },
  { code: 'ru', label: t('header.languages.ru') }
]

const currentLanguage = computed(() => {
  return languages.find(lang => lang.code === currentLocale.value) || languages[0]
})

const isLanguageMenuOpen = ref(false)

const toggleLanguageMenu = () => {
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value
}

const changeLanguage = (lang) => {
  locale.value = lang
  isLanguageMenuOpen.value = false
}

// Close menu when clicking outside
const closeLanguageMenu = (event) => {
  if (!event.target.closest('.language-selector')) {
    isLanguageMenuOpen.value = false
  }
}

// Add click event listener when component is mounted
onMounted(() => {
  document.addEventListener('click', closeLanguageMenu)
})

// Remove click event listener when component is unmounted
onUnmounted(() => {
  document.removeEventListener('click', closeLanguageMenu)
})
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
}

.header {
  background: #002f34;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-top {
  background: white;
  padding: 0.75rem 0;
  font-size: 0.875rem;
  border-bottom: 1px solid #e5e9eb;
}

.header-top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.language-selector {
  position: relative;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
}

.language-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.language-option {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  transition: background-color 0.2s;
}

.language-option:hover {
  background-color: #f5f5f5;
}

.language-option.active {
  background-color: #e3f2fd;
  color: #1976d2;
}

.top-nav {
  display: flex;
  gap: 2rem;
}

.top-nav-link {
  color: #002f34;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.8;
  transition: opacity 0.2s;
  font-weight: 500;
}

.top-nav-link:hover {
  opacity: 1;
}

.top-nav-link svg {
  color: #002f34;
}

.header-main {
  background: #002f34;
  padding: 1rem 0;
}

.header-main-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-section {
  flex-shrink: 0;
}

.search-section {
  flex: 1;
  max-width: 600px;
  margin: 0 auto;
}

.search-container {
  width: 100%;
}

.search-input-container {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s;
  width: 100%;
}

.logo {
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
}

.logo-text {
  color: white;
}

.logo-dot {
  color: #23e5db;
}

.logo-uz {
  color: white;
  opacity: 0.8;
}

.search-input-container:focus-within {
  box-shadow: 0 0 0 2px #23e5db;
}

.search-input {
  flex: 1;
  padding: 0.875rem 1rem;
  border: none;
  background: transparent;
  font-size: 0.875rem;
  color: #002f34;
  width: 100%;
}

.search-input::placeholder {
  color: #666;
}

.search-btn {
  background: #002f34;
  border: none;
  padding: 0.875rem 1.25rem;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.search-btn:hover {
  background: #003f45;
}

.mobile-view {
  display: none;
  padding: 8px 16px;
  gap: 12px;
  width: 100%;
}

.mobile-view .search-section {
  flex: 1;
}

.mobile-view .search-form {
  width: 100%;
}

.mobile-view .search-input-container {
  height: 40px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.mobile-view .search-input {
  flex: 1;
  height: 100%;
  border: none;
  background: transparent;
  color: #333;
  font-size: 14px;
}

.mobile-view .search-input::placeholder {
  color: #666;
}

.mobile-view .search-btn {
  background: transparent;
  border: none;
  padding: 0;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-view .notification-btn {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
}

.mobile-view .notification-icon {
  position: relative;
  color: white;
}

.mobile-view .notification-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background: red;
  border-radius: 50%;
}

.auth-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  font-weight: 500;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.post-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #23e5db;
  border: none;
  color: #002f34;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  font-size: 0.875rem;
}

.post-btn:hover {
  background: #20cdc4;
}

.post-btn svg {
  stroke: #002f34;
}

.notification-btn {
  position: relative;
  background: transparent;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.notification-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  background: #23e5db;
  border-radius: 50%;
  border: 2px solid #002f34;
}

@media (max-width: 768px) {
  .desktop-view {
    display: none;
  }
  
  .mobile-view {
    display: flex;
    align-items: center;
  }
  
  .header-top {
    display: none;
  }
}
</style>
