import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   host: '192.168.100.56', // IP-manzilni kiriting
  //   port: 5173 // Portni o'zgartirmoqchi bo'lsangiz, shu yerda belgilang
  // }
})
