module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'import',
    'jsx-a11y',
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
  settings: {
    'import/resolver': { webpack: { config: 'webpack.config.js' } },
  },
};
