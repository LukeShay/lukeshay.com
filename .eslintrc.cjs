module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['svelte3'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
};
