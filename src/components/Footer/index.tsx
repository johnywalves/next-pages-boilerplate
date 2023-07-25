import Link from 'next/link'

import { WrapperFooter } from './styles'

const Footer = () => (
  <WrapperFooter>
    <p>
      Feito com <span>♥</span> por{' '}
      <Link href="https://johnywalves.com.br/">Johny W. Alves</Link>
    </p>
  </WrapperFooter>
)

export default Footer
