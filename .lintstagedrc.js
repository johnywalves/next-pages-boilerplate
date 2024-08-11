module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run next:lint`,
    `npm run lint`,
    `npm run type-check`,
    `npm test -- --findRelatedTests ${filenames.join(' ')} --passWithNoTests`
  ]
}
