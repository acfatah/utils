import antfu from '@antfu/eslint-config'
import pluginVitest from '@vitest/eslint-plugin'

export default antfu(
  {},

  {
    rules: {
      'sort-imports': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          partitionByNewLine: true,
          newlinesBetween: 'ignore',
        },
      ],
    },
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/coverage/**', 'logs'],
  },

  {
    rules: pluginVitest.configs.recommended.rules,
    files: ['tests/**/*'],
  },
)
