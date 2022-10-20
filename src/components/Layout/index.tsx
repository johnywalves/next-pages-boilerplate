import React, { ReactNode } from 'react'

import { WrapperLayout } from './styles'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <WrapperLayout>{children}</WrapperLayout>
)

export default Layout
