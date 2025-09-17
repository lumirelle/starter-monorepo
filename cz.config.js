// @ts-check
import { definePrompt } from 'czg'

export default definePrompt({
  markBreakingChangeMode: true,
  allowBreakingChanges: ['feat', 'fix', 'chore'],
  alias: {
    typo: 'docs: fix typos',
    readme: 'docs: update README.md',
  },
  scopeOverrides: {
    feat: [
      'pkg-placeholder',
    ],
    fix: [
      'pkg-placeholder',
    ],
    refactor: [
      'pkg-placeholder',
    ],
    chore: [
      'deps',
      'tools',
    ],
  },
})
