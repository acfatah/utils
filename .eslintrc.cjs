/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: [
    'package*.json',
    '.gitignore',
    '.litstagedrc.json',
    '.simple-git-hooks.json',
    'README.md'
  ],
  overrides: [
    {
      files: ['.vue', '.js', '.jsx', '.cjs', '.mjs']
    }
  ]
}
