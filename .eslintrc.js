module.exports = {
  extends: '@react-native-community',
  parser: 'babel-eslint',
  env: {
    'jest': true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'object-curly-spacing': ["error", "always"],
    'no-extra-boolean-cast': 0,
    'react-native/no-inline-styles': 'always'
  },
  globals: {
    fetch: false
  }
};
