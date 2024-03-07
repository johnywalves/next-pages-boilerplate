/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')({
  dest: 'public',
  // register: true,
  // skipWaiting: true,
  disableDevLogs: true,
  disable: process.env.NODE_ENV === 'development'
})

const config = {
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  // output: 'export',
  experimental: { forceSwcTransforms: true },
  compiler: {
    styledComponents: {
      displayName: process.env.NODE_ENV === 'development',
      ssr: process.env.NODE_ENV === 'development'
    }
  }
}

module.exports = withPWA(config)
