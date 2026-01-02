import type { KnipConfig } from 'knip'

export default {
  workspaces: {
    '.': {
      // @keep-sorted
      ignoreDependencies: [
        '@antfu/utils',
        'bumpp',
        'lint-staged',
        'pkg-placeholder',
      ],
    },
    'playground': {
      // @keep-sorted
      ignoreDependencies: [
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
  },
} satisfies KnipConfig
