module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'standard-with-typescript',
  ],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': ['warn'],
    '@typescript-eslint/explicit-function-return-type': ['warn'],
  },
  overrides: [{
    files: ['*.spec.ts'],
    plugins: ['mocha'],
    extends: ['plugin:mocha/recommended'],
    rules: {
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    }
  }]
};
