import ComponentsSectorButton from './button'
import {
  WrapperComponentsSector,
  ListComponentsSector
} from './components-sector.styles'

const ComponentsSector = () => (
  <WrapperComponentsSector>
    <h2>Component collection</h2>
    <p>
      Maecenas gravida nec tellus hendrerit mattis. Donec et nibh non lacus
      laoreet semper. Maecenas efficitur bibendum libero eget consequat.
    </p>
    <ListComponentsSector>
      <ComponentsSectorButton />
    </ListComponentsSector>
  </WrapperComponentsSector>
)

export default ComponentsSector
