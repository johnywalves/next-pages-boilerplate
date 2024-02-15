import { ReactNode } from 'react'

import { WrapperButton } from './button.styles'

export { default as ButtonSkeleton } from './button.skeleton'

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  /**
   * Button design variance
   */
  variant?: 'primary' | 'secondary' | 'tertiary'
  /**
   * Button animation e style of loading
   */
  loading?: boolean
  /**
   * Children
   */
  children: ReactNode
}

const Button = ({ variant, loading, children, ...rest }: ButtonProps) => (
  <WrapperButton $variant={variant ?? 'primary'} $loading={!!loading} {...rest}>
    {loading ? <div className="spinner" /> : <>{children}</>}
  </WrapperButton>
)

export default Button
