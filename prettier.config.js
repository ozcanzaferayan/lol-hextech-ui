module.exports = {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  importOrder: [
    '^@components/(.*)$',
    '^@constants/(.*)$',
    '^@contexts/(.*)$',
    '^@data/(.*)$',
    '^@screens/(.*)$',
    '^@utils/(.*)$',
    '^@assets/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
