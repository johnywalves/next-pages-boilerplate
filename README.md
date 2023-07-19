<picture style="display:flex;align-items:center;justify-content:center;margin:0 0 20px;">
    <img src="https://raw.githubusercontent.com/johnywalves/react-next-boilerplate/main/public/img/logo-gh.svg" alt="Boilerplate to React, NextJS and TypeScript" />
</picture>

This is a [Next.js](https://nextjs.org/) boilerplate to be create a NextJS project with React

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Plop](https://github.com/plopjs/plop)

## How to use

Create project with boilerplate example

```bash
npx create-next-app -e https://github.com/johnywalves/react-next-boilerplate
# or
yarn create next-app -e https://github.com/johnywalves/react-next-boilerplate
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
- `next:lint`: runs the linter in all components and pages from NextJS
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `generate`: create a component using a template

## Generate Static Files

The `deploy` script has been removed to perform the export configuration is required, as described in the [Next.js document](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

```javascript
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
