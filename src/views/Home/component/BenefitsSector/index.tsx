import Icon, { Book, Certificate, Share } from 'components/Icon'

import { BenefitsHome } from './styles'

const BenefitsSector = () => (
  <BenefitsHome>
    <h2>Benefícios</h2>
    <ul>
      <li>
        <Icon>
          <Certificate width={55} />
        </Icon>
        <h3>Lorem ipsum dolor</h3>
        <p>Duis felis ex, luctus eget euismod a, ornare sed dui</p>
      </li>
      <li>
        <Icon>
          <Share width={55} />
        </Icon>
        <h3>Donec vitae nunc</h3>
        <p>Maecenas gravida nec tellus hendrerit mattis</p>
      </li>
      <li>
        <Icon>
          <Book width={55} />
        </Icon>
        <h3>Praesent tempor</h3>
        <p>Integer luctus fringilla imperdiet, praesent felis mauris</p>
      </li>
    </ul>
  </BenefitsHome>
)

export default BenefitsSector
