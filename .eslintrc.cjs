module.exports = {
  extends: 'get-off-my-lawn',
  overrides: [
    {
      files: ['src/routes/**/*', 'src/lib/client/**/*'],
      rules: {
        'node/prefer-global/process': 'off',
      },
    },
  ],
  plugins: ['qwik'],
};
