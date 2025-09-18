<template>
  <div class="app">
    <!-- Header -->
    <Header />
    <!-- Main Content -->
    <main class="main-content">
      <div class="container">
        <!-- <nav class="language-switcher">
          <button @click="changeLocale('uz')" :class="{ active: currentLocale === 'uz' }">O'zbekcha</button>
          <button @click="changeLocale('ru')" :class="{ active: currentLocale === 'ru' }">Русский</button>
        </nav> -->
        <router-view />
      </div>
    </main>

    <!-- Footer -->
    <Footer />
    <MobileBottomBar />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/footer.vue'
import Header from './components/header.vue'
import MobileBottomBar from './components/MobileBottomBar.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

const changeLocale = (lang) => {
  locale.value = lang
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.language-switcher {
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  background-color: #f8f9fa;
}

.language-switcher button {
  padding: 0.5rem 1rem;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.language-switcher button.active {
  background: #007bff;
  color: white;
  border-color: #007bff;
}

.language-switcher button:hover {
  border-color: #007bff;
}
</style>
