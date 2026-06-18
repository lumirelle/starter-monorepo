import type { KnipConfig } from 'knip'

export default {
  workspaces: {
    '.': {
      entry: ['./test/**/*.{ts,js}'],
      ignoreFiles: ['taze.config.ts'],
      ignoreDependencies: ['@lumirelle/oxlint-config', 'taze'],
    },
    'docs': {
      ignoreDependencies: [
        '@iconify-json/svg-spinners',
        '@unocss/reset',
        '@vueuse/core',
        'floating-vue',
        'pinia',
        'uno.css',
      ],
    },
    'packages/pkg-placeholder': {
      entry: ['./test/**/*.{ts,js}'],
    },
  },
} satisfies KnipConfig
