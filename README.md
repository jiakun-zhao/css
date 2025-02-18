## @jiakun-zhao/css

<!-- ![npm version](https://img.shields.io/npm/v/@jiakun-zhao/css?color=%236054ba) -->
![npm version](https://img.shields.io/npm/v/@jiakun-zhao/css?color=%23954)

### Install

```bash
pnpm i -D @jiakun-zhao/css
ni -D @jiakun-zhao/css
```

### Usage

```ts
// uno.config.ts
import type { Theme } from 'unocss/preset-wind3'
import presetHi from '@jiakun-zhao/css/unocss'
import { defineConfig } from 'unocss'

export default defineConfig<Theme>({
  presets: [
    presetHi()
  ]
})
```

```ts
// [vite] index.ts
import '@jiakun-zhao/css'
```

MIT - Copyright (c) 2025 Jiakun Zhao
