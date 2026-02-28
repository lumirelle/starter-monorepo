/* eslint perfectionist/sort-objects: "error" */
import type { KnipConfig } from 'knip'

export default {
  workspaces: {
    '.': {
      ignoreDependencies: ['pkg-placeholder', '@arethetypeswrong/cli', 'publint'],
      ignoreFiles: ['bunup.config.ts'],
    },
    docs: {
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
      ignoreDependencies: ['@antfu/utils'],
    },
    playground: {
      ignoreDependencies: ['pkg-placeholder'],
    },
  },
} satisfies KnipConfig
