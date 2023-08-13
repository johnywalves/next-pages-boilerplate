import { UilBookAlt, UilEnvelopeAlt, UilBox } from '@iconscout/react-unicons'

import { BenefitsHome } from './benefits-sector.styles'

const BenefitsSector = () => (
  <BenefitsHome>
    <h2>Some benefits</h2>
    <ul>
      <li>
        <UilBookAlt size={64} />
        <h3>Lorem ipsum dolor</h3>
        <p>Duis felis ex, luctus eget euismod a, ornare sed dui</p>
      </li>
      <li>
        <UilEnvelopeAlt size={64} />
        <h3>Donec vitae nunc</h3>
        <p>Maecenas gravida nec tellus hendrerit mattis</p>
      </li>
      <li>
        <UilBox size={64} />
        <h3>Praesent tempor</h3>
        <p>Integer luctus fringilla imperdiet, praesent felis mauris</p>
      </li>
    </ul>
  </BenefitsHome>
)

export default BenefitsSector
