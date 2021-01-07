module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --cache --cache-location "./.eslintcache" --fix',
  ],
}
