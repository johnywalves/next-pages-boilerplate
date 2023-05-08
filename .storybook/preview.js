import { RouterContext } from 'next/dist/shared/lib/router-context'
import GlobalStyles from '../src/styles/styled-components/global'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
