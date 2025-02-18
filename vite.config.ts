import { rm } from 'node:fs/promises'
import { join } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [{
    name: 'clean',
    async closeBundle() {
      const { root, build: { outDir, assetsDir } } = this.environment.config
      await rm(join(root, outDir, assetsDir), { recursive: true, force: true })
    },
  }],
  base: './',
  css: {
    transformer: 'lightningcss',
  },
  build: {
    assetsInlineLimit: 0,
    cssMinify: 'lightningcss',
    rollupOptions: {
      input: 'src/css.ts',
      output: {
        assetFileNames(chunk) {
          return chunk.names.find(it => it.endsWith('.css'))
            ? 'index.css'
            : '[ext]/[name].[hash].[ext]'
        },
      },
    },
  },
})
