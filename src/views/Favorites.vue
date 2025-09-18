<template>
  <div class="favorites-container">
    <div class="favorites-header">
      <h1 class="favorites-title">Избранное</h1>
      <span class="favorites-count" v-if="favorites.length">{{ favorites.length }} товаров</span>
    </div>

    <div v-if="favorites.length" class="favorites-grid">
      <div v-for="item in favorites" :key="item.id" class="favorite-card">
        <div class="favorite-image-container" @click="goToProduct(item.id)">
          <img :src="item.image" :alt="item.title" class="favorite-image">
          <button @click.stop="removeFromFavorites(item.id)" class="remove-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#7000FF" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        <div class="favorite-details" @click="goToProduct(item.id)">
          <h3 class="favorite-title">{{ item.title }}</h3>
          <div class="favorite-price-container">
            <p class="favorite-price">{{ formatPrice(item.price) }} сум</p>
            <p v-if="item.oldPrice" class="favorite-old-price">{{ formatPrice(item.oldPrice) }} сум</p>
          </div>          
        </div>
      </div>
    </div>

    <div v-else class="empty-favorites">
      <img src="../assets/empty-favorites.svg" alt="Empty favorites" class="empty-image">
      <h2>В избранном пока пусто</h2>
      <p>Сохраняйте товары, которые понравились, чтобы купить их позже</p>
      <router-link to="/" class="browse-button">Перейти к покупкам</router-link>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'Favorites',
  setup() {
    const router = useRouter()
    return { router }
  },
  data() {
    return {
      favorites: [
        {
          id: 1,
          title: "iPhone 14 Pro Max 256GB",
          price: 12500000,
          oldPrice: 13000000,
          image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha"
        },
        {
          id: 2,
          title: "Samsung Galaxy S23 Ultra",
          price: 11800000,
          oldPrice: 12500000,
          image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha"
        },
        {
          id: 3,
          title: "MacBook Pro 14 M2 Pro",
          price: 18900000,
          image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha"
        },
        {
          id: 4,
          title: "Samsung Galaxy Watch 5 Pro",
          price: 4200000,
          oldPrice: 4500000,
          image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha"
        },
        {
          id: 5,
          title: "iPad Pro 12.9 M2 256GB",
          price: 15600000,
          image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha"
        }
      ]
    }
  },
  methods: {
    formatPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    removeFromFavorites(id) {
      this.favorites = this.favorites.filter(item => item.id !== id);
    },
    goToProduct(id) {
      this.router.push(`/product/${id}`);
    }
  }
}
</script>

<style scoped>
.favorites-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
}

.favorites-header {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  gap: 12px;
}

.favorites-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.favorites-count {
  color: #62656a;
  font-size: 16px;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
}

.favorite-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.favorite-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.favorite-image-container {
  position: relative;
  padding-top: 100%;
  cursor: pointer;
}

.favorite-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-button {
  position: absolute;
  top: 12px;
  right: 12px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  z-index: 2;
}

.remove-button:hover {
  transform: scale(1.1);
  background: #fff5ff;
}

.remove-button svg {
  color: #7000FF;
}

.remove-button:hover svg {
  color: #5c00d6;
}

.favorite-details {
  padding: 12px;
  cursor: pointer;
}

.favorite-title {
  font-size: 14px;
  margin: 0 0 8px;
  color: #1a1a1a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 40px;
}

.favorite-price-container {
  margin-bottom: 12px;
}

.favorite-price {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.favorite-old-price {
  font-size: 14px;
  color: #62656a;
  text-decoration: line-through;
  margin: 4px 0 0;
}

.add-to-cart-button {
  width: 100%;
  padding: 10px;
  background: #7000FF;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-to-cart-button:hover {
  background: #5c00d6;
}

.empty-favorites {
  text-align: center;
  padding: 40px 20px;
}

.empty-image {
  width: 200px;
  height: 200px;
  margin-bottom: 24px;
}

.empty-favorites h2 {
  font-size: 24px;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.empty-favorites p {
  color: #62656a;
  margin-bottom: 24px;
}

.browse-button {
  display: inline-block;
  padding: 12px 24px;
  background: #7000FF;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.2s;
}

.browse-button:hover {
  background: #5c00d6;
}

@media (max-width: 768px) {
  .favorites-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .favorites-container {
    padding: 12px;
  }

  .favorite-title {
    font-size: 13px;
    height: 36px;
  }

  .favorite-price {
    font-size: 14px;
  }

  .favorite-old-price {
    font-size: 12px;
  }

  .remove-button {
    width: 32px;
    height: 32px;
    top: 8px;
    right: 8px;
  }

  .remove-button svg {
    width: 16px;
    height: 16px;
  }

  .favorite-details {
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .favorites-header {
    margin-bottom: 16px;
  }

  .favorites-title {
    font-size: 24px;
  }

  .favorites-count {
    font-size: 14px;
  }
}
</style>