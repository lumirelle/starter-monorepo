import type { KnipConfig } from 'knip'

export default {
  workspaces: {
    '.': {
      entry: ['./test/**/*.{ts,js}'],
      ignoreBinaries: ['mise'],
      ignoreDependencies: [
        '@lumirelle/oxlint-config',
        'nano-staged',
      ],
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
