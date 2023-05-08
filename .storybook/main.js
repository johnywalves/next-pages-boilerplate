module.exports = {
  stories: ['../src/app/**/*stories.tsx', '../src/components/**/*stories.tsx', '../src/views/**/*stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  staticDirs: ['../public'],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: false
  }
}
