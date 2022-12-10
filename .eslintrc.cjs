module.exports = {
  root: true,
  extends: ['@antfu', '@vue/eslint-config-prettier'],
  rules: {
    'no-console': 'warn',
    'antfu/if-newline': 'off',
  },
  ignorePatterns: ['package.json', 'pnpm-lock.yaml'],
}
