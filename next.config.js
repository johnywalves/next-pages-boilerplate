/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

const config = {
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  // output: 'export',
  experimental: { forceSwcTransforms: true }
}

if (isProd) {
  module.exports = withPWA({
    ...config,
    pwa: {
      dest: 'public'
    }
  })
}

module.exports = config
