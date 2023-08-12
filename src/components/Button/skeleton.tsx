import { ReactNode } from 'react'

import Button from '.'

const ButtonSkeleton = ({ children }: { children: ReactNode }) => (
  <Button className="skeleton">{children || ' '}</Button>
)

export default ButtonSkeleton
