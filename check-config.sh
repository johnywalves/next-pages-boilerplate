rm -rf node_modules
rm -rf .next
rm -rf coverage
rm -rf storybook-static

npm i

yarn format
yarn next:lint
yarn lint --fix
yarn test --bail
yarn build
yarn build-storybook