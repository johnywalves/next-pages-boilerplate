import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  layout: "centered"
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
