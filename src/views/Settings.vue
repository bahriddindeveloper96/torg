<template>
  <div class="settings-container">
    <div class="settings-header">
      <h1>{{ t('settings.title') }}</h1>
      <p class="subtitle">{{ t('settings.subtitle') }}</p>
    </div>

    <div class="settings-grid">
      <!-- Account Settings -->
      <div class="settings-card">
        <div class="card-header">
          <i class="fas fa-user-circle"></i>
          <h2>{{ t('settings.account.title') }}</h2>
        </div>
        <div class="card-content">
          <div class="form-group">
            <label>{{ t('settings.account.language.label') }}</label>
            <select v-model="settings.language" class="custom-select">
              <option value="uz">{{ t('settings.account.language.options.uz') }}</option>
              <option value="ru">{{ t('settings.account.language.options.ru') }}</option>
              <option value="en">{{ t('settings.account.language.options.en') }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>{{ t('settings.account.timezone.label') }}</label>
            <select v-model="settings.timezone" class="custom-select">
              <option value="Asia/Tashkent">{{ t('settings.account.timezone.options.tashkent') }}</option>
              <option value="Asia/Samarkand">{{ t('settings.account.timezone.options.samarkand') }}</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Notification Settings -->
      <div class="settings-card">
        <div class="card-header">
          <i class="fas fa-bell"></i>
          <h2>{{ t('settings.notifications.title') }}</h2>
        </div>
        <div class="card-content">
          <div class="toggle-group">
            <label class="toggle-label">
              <span>{{ t('settings.notifications.messages') }}</span>
              <label class="switch">
                <input type="checkbox" v-model="settings.notifications.messages">
                <span class="slider"></span>
              </label>
            </label>
          </div>
          <div class="toggle-group">
            <label class="toggle-label">
              <span>{{ t('settings.notifications.ads') }}</span>
              <label class="switch">
                <input type="checkbox" v-model="settings.notifications.ads">
                <span class="slider"></span>
              </label>
            </label>
          </div>
          <div class="toggle-group">
            <label class="toggle-label">
              <span>{{ t('settings.notifications.offers') }}</span>
              <label class="switch">
                <input type="checkbox" v-model="settings.notifications.offers">
                <span class="slider"></span>
              </label>
            </label>
          </div>
        </div>
      </div>

      <!-- Privacy Settings -->
      <div class="settings-card">
        <div class="card-header">
          <i class="fas fa-shield-alt"></i>
          <h2>{{ t('settings.privacy.title') }}</h2>
        </div>
        <div class="card-content">
          <div class="toggle-group">
            <label class="toggle-label">
              <span>{{ t('settings.privacy.showProfile') }}</span>
              <label class="switch">
                <input type="checkbox" v-model="settings.privacy.showProfile">
                <span class="slider"></span>
              </label>
            </label>
          </div>
          <div class="toggle-group">
            <label class="toggle-label">
              <span>{{ t('settings.privacy.showPhone') }}</span>
              <label class="switch">
                <input type="checkbox" v-model="settings.privacy.showPhone">
                <span class="slider"></span>
              </label>
            </label>
          </div>
        </div>
      </div>

      <!-- Theme Settings -->
      <div class="settings-card">
        <div class="card-header">
          <i class="fas fa-paint-brush"></i>
          <h2>{{ t('settings.theme.title') }}</h2>
        </div>
        <div class="card-content">
          <div class="theme-options">
            <div 
              v-for="theme in themes" 
              :key="theme.id"
              class="theme-option"
              :class="{ active: settings.theme === theme.id }"
              @click="selectTheme(theme.id)"
            >
              <div class="theme-preview" :style="{ backgroundColor: theme.color }"></div>
              <span>{{ t(`settings.theme.options.${theme.id}`) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="settings-actions">
      <button class="btn-cancel" @click="resetSettings">{{ t('settings.buttons.cancel') }}</button>
      <button class="btn-save" @click="saveSettings">{{ t('settings.buttons.save') }}</button>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'
import { setLanguage } from '../i18n'

export default {
  name: 'Settings',
  setup() {
    const { t, locale } = useI18n()
    return { t, locale }
  },
  data() {
    return {
      settings: {
        language: this.$i18n.locale,
        timezone: 'Asia/Tashkent',
        theme: 'light',
        notifications: {
          messages: true,
          ads: true,
          offers: true
        },
        privacy: {
          showProfile: true,
          showPhone: false
        }
      },
      themes: [
        { id: 'light', color: '#ffffff' },
        { id: 'dark', color: '#1a1a1a' },
        { id: 'blue', color: '#1e90ff' },
        { id: 'green', color: '#2ecc71' }
      ]
    }
  },
  watch: {
    'settings.language': {
      handler(newLang) {
        setLanguage(newLang)
      }
    }
  },
  methods: {
    selectTheme(themeId) {
      this.settings.theme = themeId
    },
    async saveSettings() {
      try {
        // Save all settings
        localStorage.setItem('userSettings', JSON.stringify(this.settings))
        // Update language
        setLanguage(this.settings.language)
        
        // Show success message
        alert(this.t('settings.saveSuccess'))
      } catch (error) {
        console.error('Error saving settings:', error)
        alert(this.t('settings.saveError'))
      }
    },
    resetSettings() {
      // Load saved settings from localStorage
      const savedSettings = localStorage.getItem('userSettings')
      if (savedSettings) {
        this.settings = JSON.parse(savedSettings)
        // Update language after reset
        setLanguage(this.settings.language)
      }
    },
    loadSavedSettings() {
      // Load saved settings
      const savedSettings = localStorage.getItem('userSettings')
      if (savedSettings) {
        this.settings = { ...this.settings, ...JSON.parse(savedSettings) }
      }
      // Load saved language
      const savedLanguage = localStorage.getItem('userLanguage')
      if (savedLanguage) {
        this.settings.language = savedLanguage
        setLanguage(savedLanguage)
      }
    }
  },
  mounted() {
    this.loadSavedSettings()
  }
}
</script>

<style scoped>
.settings-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.settings-header {
  text-align: center;
  margin-bottom: 3rem;
}

.settings-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1.1rem;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.settings-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.settings-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.card-header {
  background: #f8f9fa;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #eee;
}

.card-header i {
  font-size: 1.5rem;
  color: #007bff;
}

.card-header h2 {
  margin: 0;
  font-size: 1.25rem;
  color: #333;
}

.card-content {
  padding: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 500;
}

.custom-select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  color: #333;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.3s;
}

.custom-select:focus {
  outline: none;
  border-color: #007bff;
}

.toggle-group {
  margin-bottom: 1rem;
}

.toggle-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.toggle-label span {
  color: #333;
  font-weight: 500;
}

/* Switch Toggle */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #007bff;
}

input:checked + .slider:before {
  transform: translateX(24px);
}

/* Theme Options */
.theme-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.theme-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.theme-option:hover {
  background-color: #f8f9fa;
}

.theme-option.active {
  background-color: #e3f2fd;
}

.theme-preview {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: 2px solid #ddd;
  transition: border-color 0.3s;
}

.theme-option.active .theme-preview {
  border-color: #007bff;
}

.settings-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-save, .btn-cancel {
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-save {
  background: #007bff;
  color: white;
  border: none;
}

.btn-save:hover {
  background: #0056b3;
}

.btn-cancel {
  background: white;
  color: #666;
  border: 1px solid #ddd;
}

.btn-cancel:hover {
  background: #f8f9fa;
  border-color: #999;
}

@media (max-width: 768px) {
  .settings-grid {
    grid-template-columns: 1fr;
  }
  
  .theme-options {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .settings-actions {
    flex-direction: column-reverse;
  }
  
  .btn-save, .btn-cancel {
    width: 100%;
  }
}
</style>
