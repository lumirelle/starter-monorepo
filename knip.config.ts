import type { KnipConfig } from 'knip'

export default {
  workspaces: {
    '.': {
      entry: ['bunup.config.ts'],
      ignoreDependencies: ['@arethetypeswrong/cli', '@lumirelle/oxlint-config', 'publint'],
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
