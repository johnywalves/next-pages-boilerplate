clear

rm -rf node_modules
rm -rf .next
rm -rf coverage
rm -rf storybook-static

npm i

npm run format
npm run next:lint
npm run lint:fix
npm run test:bail
npm run build
npm run build-storybook