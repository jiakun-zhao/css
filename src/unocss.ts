import type { Theme } from 'unocss/preset-wind3'
import { definePreset, presetIcons } from 'unocss'
import { name } from '../package.json'

interface Options {
  /** @default true */
  icon?: boolean
  /** @default true */
  blocklist?: boolean
}

export default function (options?: Options) {
  const { icon = true, blocklist = true } = options ?? {}
  return definePreset<Theme>({
    name,
    blocklist: blocklist ? ['container', 'resize'] : undefined,
    presets: icon
      ? [
          presetIcons({ extraProperties: { 'display': 'inline-block', 'vertical-align': 'sub' }, scale: 1.2 }),
        ]
      : undefined,
    shortcuts: [{
      'absolute-full': 'absolute top-0 left-0 right-0 bottom-0',
      'flex-center': 'items-center justify-center',
    }],
    theme: {
      colors: {
        accent: '#954',
        // https://ui.shadcn.com/themes
        // https://github.com/shadcn-ui/ui/blob/main/apps/www/public/r/themes/zinc.json
        shadcn: {
          accent: {
            DEFAULT: 'hsl(var(--shadcn-accent))',
            foreground: 'hsl(var(--shadcn-accent-foreground))',
          },
          background: 'hsl(var(--shadcn-background))',
          border: 'hsl(var(--shadcn-border))',
          card: {
            DEFAULT: 'hsl(var(--shadcn-card))',
            foreground: 'hsl(var(--shadcn-card-foreground))',
          },
          chart: {
            1: 'hsl(var(--shadcn-chart-1))',
            2: 'hsl(var(--shadcn-chart-2))',
            3: 'hsl(var(--shadcn-chart-3))',
            4: 'hsl(var(--shadcn-chart-4))',
            5: 'hsl(var(--shadcn-chart-5))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--shadcn-destructive))',
            foreground: 'hsl(var(--shadcn-destructive-foreground))',
          },
          foreground: 'hsl(var(--shadcn-foreground))',
          input: 'hsl(var(--shadcn-input))',
          muted: {
            DEFAULT: 'hsl(var(--shadcn-muted))',
            foreground: 'hsl(var(--shadcn-muted-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--shadcn-popover))',
            foreground: 'hsl(var(--shadcn-popover-foreground))',
          },
          primary: {
            DEFAULT: 'hsl(var(--shadcn-primary))',
            foreground: 'hsl(var(--shadcn-primary-foreground))',
          },
          ring: 'hsl(var(--shadcn-ring))',
          secondary: {
            DEFAULT: 'hsl(var(--shadcn-secondary))',
            foreground: 'hsl(var(--shadcn-secondary-foreground))',
          },
        },
      },
      fontFamily: {
        mono: '"Geist Mono Variable","DM Mono","IBM Plex Mono",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
        sans: '"Geist Variable",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',
      },
      zIndex: {
        max: '2147483647',
        min: '-2147483647',
      },
    },

  })
}
