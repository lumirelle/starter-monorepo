import type { KnipConfig } from 'knip'

export default {
  // @keep-sorted
  workspaces: {
    '.': {
      // @keep-sorted
      ignoreDependencies: [
        '@antfu/utils',
        'pkg-placeholder',
      ],
    },
    'docs': {
      // @keep-sorted
      ignoreDependencies: [
        '@iconify-json/svg-spinners',
        '@unocss/reset',
        '@vueuse/core',
        'floating-vue',
        'pinia',
        'uno.css',
      ],
    },
    'playground': {
      // @keep-sorted
      ignoreDependencies: [
        'pkg-placeholder',
      ],
    },
  },
} satisfies KnipConfig
