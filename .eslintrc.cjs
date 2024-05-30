module.exports = {
  root: true,
  extends: ['@antfu', '@vue/eslint-config-prettier'],
  rules: {
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'antfu/if-newline': 'off',
  },
  ignorePatterns: ['package.json', 'pnpm-lock.yaml'],
}
