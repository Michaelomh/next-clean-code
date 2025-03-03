/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  useTabs: false,
  tabWidth: 2,
  printWidth: 120,
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  semi: false,
  endOfLine: 'lf',
  plugins: ['prettier-plugin-tailwindcss'],
}
