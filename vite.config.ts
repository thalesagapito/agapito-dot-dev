import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import components from 'vite-plugin-components'

export default defineConfig({
  plugins: [
    vue(),
    pages(),
    components(),
  ],

  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
    ],
  },

})
