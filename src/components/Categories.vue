<template>
  <div class="categories">
      <div class="categories-slider" ref="slider">
        <router-link
          v-for="category in categories" 
          :key="category.id"
          :to="category.link"
          class="category-item"
          :class="{ active: currentCategory === category.id }"
        >
          <div class="category-icon">
            <component :is="category.icon" class="icon" />
          </div>
          <span class="category-name">{{ category.name }}</span>
        </router-link>
      </div>
      </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { 
  ComputerDesktopIcon,
  ShoppingBagIcon,
  TruckIcon,
  HomeIcon,
  ShoppingCartIcon,
  WrenchScrewdriverIcon,
  TrophyIcon,
  SparklesIcon,
  GiftIcon,
  BookOpenIcon
} from '@heroicons/vue/24/outline'

const slider = ref(null)
const currentCategory = ref(null)

const { t } = useI18n()

const categories = [
  {
    id: 1,
    name: t('categories.electronics'),
    icon: ComputerDesktopIcon,
    link: "/category/electronics"
  },
  {
    id: 2,
    name: t('categories.fashion'),
    icon: ShoppingBagIcon,
    link: "/category/fashion"
  },
  {
    id: 3,
    name: t('categories.cars'),
    icon: TruckIcon,
    link: "/category/cars"
  },
  {
    id: 4,
    name: t('categories.realEstate'),
    icon: HomeIcon,
    link: "/category/real-estate"
  },
  {
    id: 5,
    name: t('categories.furniture'),
    icon: ShoppingCartIcon,
    link: "/category/furniture"
  },
  {
    id: 6,
    name: t('categories.services'),
    icon: WrenchScrewdriverIcon,
    link: "/category/services"
  },
  {
    id: 7,
    name: t('categories.sports'),
    icon: TrophyIcon,
    link: "/category/sports"
  },
  {
    id: 8,
    name: t('categories.garden'),
    icon: SparklesIcon,
    link: "/category/garden"
  },
  {
    id: 9,
    name: t('categories.toys'),
    icon: GiftIcon,
    link: "/category/toys"
  },
  {
    id: 10,
    name: t('categories.books'),
    icon: BookOpenIcon,
    link: "/category/books"
  },
  {
    id: 11,
    name: t('categories.books'),
    icon: BookOpenIcon,
    link: "/category/books"
  },
  {
    id: 12,
    name: t('categories.books'),
    icon: BookOpenIcon,
    link: "/category/books"
  }
]

onMounted(() => {
  slider.value?.addEventListener('scroll', () => {})
  window.addEventListener('resize', () => {})
})
</script>

<style scoped>
.categories-wrapper {
  background: transparent;
  padding: 1.5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
}

.categories {
  position: relative;
  display: flex;
  align-items: center;
}

.categories-slider {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0.75rem 0.5rem;
  width: 100%;
}

.categories-slider::-webkit-scrollbar {
  display: none;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  min-width: 130px;
  padding: 0.875rem 1rem;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
}

.category-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
  z-index: 1;
}

.category-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.category-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.category-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.12;
  transition: opacity 0.3s ease;
  border-radius: 14px;
}

.icon {
  width: 32px;
  height: 32px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.category-item:hover .icon {
  transform: scale(1.15) rotate(-5deg);
}

.category-name {
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  color: white;
  margin: 0;
  z-index: 2;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.active {
  background: #eef2ff;
}

.active .category-icon {
  background: #e0e7ff;
}

.active .icon {
  color: #4f46e5;
}

@media (max-width: 768px) {
  .categories-slider {
    gap: 0.625rem;
    padding: 0.625rem 0.5rem;
  }

  .category-item {
    min-width: 100px;
    padding: 0.75rem;
  }

  .category-icon {
    width: 46px;
    height: 46px;
  }

  .icon {
    width: 28px;
    height: 28px;
  }

  .category-name {
    font-size: 0.8125rem;
  }
}

@media (max-width: 480px) {
  .categories-slider {
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .category-item {
    min-width: 85px;
    padding: 0.625rem;
  }

  .category-icon {
    width: 42px;
    height: 42px;
  }

  .icon {
    width: 26px;
    height: 26px;
  }

  .category-name {
    font-size: 0.75rem;
  }
}

.category-item:nth-child(1) {
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8787 100%);
}
.category-item:nth-child(1) .category-icon {
  color: white;
}

.category-item:nth-child(2) {
  background: linear-gradient(135deg, #4ECDC4 0%, #6EE7E7 100%);
}
.category-item:nth-child(2) .category-icon {
  color: white;
}

.category-item:nth-child(3) {
  background: linear-gradient(135deg, #45B7D1 0%, #5CC7E6 100%);
}
.category-item:nth-child(3) .category-icon {
  color: white;
}

.category-item:nth-child(4) {
  background: linear-gradient(135deg, #96CEB4 0%, #B4DED0 100%);
}
.category-item:nth-child(4) .category-icon {
  color: white;
}

.category-item:nth-child(5) {
  background: linear-gradient(135deg, #D4A5A5 0%, #E3BEBE 100%);
}
.category-item:nth-child(5) .category-icon {
  color: white;
}

.category-item:nth-child(6) {
  background: linear-gradient(135deg, #9B5DE5 0%, #B07EFF 100%);
}
.category-item:nth-child(6) .category-icon {
  color: white;
}

.category-item:nth-child(7) {
  background: linear-gradient(135deg, #F15BB5 0%, #FF82D4 100%);
}
.category-item:nth-child(7) .category-icon {
  color: white;
}

.category-item:nth-child(8) {
  background: linear-gradient(135deg, #00BBF9 0%, #33CFFF 100%);
}
.category-item:nth-child(8) .category-icon {
  color: white;
}

.category-item:nth-child(9) {
  background: linear-gradient(135deg, #FF9F1C 0%, #FFB84D 100%);
}
.category-item:nth-child(9) .category-icon {
  color: white;
}

.category-item:nth-child(10) {
  background: linear-gradient(135deg, #2EC4B6 0%, #40E0D0 100%);
}
.category-item:nth-child(10) .category-icon {
  color: white;
}
</style>
