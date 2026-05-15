import type { KnipConfig } from 'knip'

export default {
  workspaces: {
    '.': {
      ignoreDependencies: ['@lumirelle/oxlint-config'],
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
  },
} satisfies KnipConfig
