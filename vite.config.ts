import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    transformer: 'lightningcss',
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
      cssFileName: 'index',
    },
    assetsInlineLimit: 0,
  },
})
