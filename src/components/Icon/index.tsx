import { MouseEventHandler, ReactNode } from 'react'

import { WrapperIcon } from './styles'

export { default as Book } from './assets/Book'
export { default as CaretDown } from './assets/CaretDown'
export { default as Certificate } from './assets/Certificate'
export { default as Magnifying } from './assets/Magnifying'
export { default as QuestionMark } from './assets/QuestionMark'
export { default as Share } from './assets/Share'

const Icon = ({
  onClick,
  children,
  ...rest
}: {
  onClick?: MouseEventHandler
  children: ReactNode
}) => (
  <WrapperIcon onClick={onClick} {...rest}>
    {children}
  </WrapperIcon>
)

export default Icon
