/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // Permite leer PREMIUM_UNLOCKED del .env sin el prefijo VITE_.
  envPrefix: ['VITE_', 'PREMIUM_'],
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg'],
      // El catálogo (public/data/bikes.json, varios MB sin comprimir) se guarda para usar la app sin conexión.
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,json}'],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      },
      manifest: {
        name: 'Talla Bici',
        short_name: 'Talla Bici',
        description: 'Encuentra tu talla de bicicleta de carretera, gravel, MTB o e-MTB.',
        lang: 'es-ES',
        theme_color: '#0f172a',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [{ src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }],
      },
    }),
  ],
  test: {
    include: ['tests/**/*.test.ts'],
  },
})
