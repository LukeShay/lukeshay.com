module.exports = {
  extends: 'get-off-my-lawn',
  overrides: [
    {
      files: ['pages/**/*', 'lib/client/**/*'],
      rules: {
        'node/prefer-global/process': 'off',
      },
    },
  ],
};
