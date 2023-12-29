import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-deploy/",
  assetsInclude: ['*.png'],
  plugins: [react({
    template: {
      transformAssetUrls: {
          includeAbsolute: false,
      },
  },
  })],
})
