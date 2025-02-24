/* eslint perfectionist/sort-objects: "error" */

import { rm } from 'node:fs/promises'
import { join } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    assetsInlineLimit: 0,
    cssMinify: false,
    rollupOptions: {
      input: 'src/index.ts',
      output: {
        assetFileNames(chunk) {
          return chunk.names.find(it => it.endsWith('.css'))
            ? 'index.css'
            : '[ext]/[name].[hash].[ext]'
        },
      },
    },
  },
  // css: {
  //   transformer: 'lightningcss',
  // },
  plugins: [{
    async closeBundle() {
      const { build: { assetsDir, outDir }, root } = this.environment.config
      await rm(join(root, outDir, assetsDir), { force: true, recursive: true })
    },
    name: 'clean',
  }],
})
