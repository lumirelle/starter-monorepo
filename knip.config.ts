import type { KnipConfig } from 'knip'

export default {
  workspaces: {
    '.': {
      /// keep-sorted
      ignoreDependencies: ['@arethetypeswrong/cli', '@lumirelle/oxlint-config', 'pkg-placeholder', 'publint'],
      /// keep-sorted
      ignoreFiles: ['bunup.config.ts'],
    },
    'docs': {
      /// keep-sorted
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
      /// keep-sorted
      ignoreDependencies: ['@antfu/utils'],
    },
  },
} satisfies KnipConfig
