import { useState } from 'react'

import Button, { ButtonSkeleton } from 'components/Button'

import { WrapperComponentsSector, ListComponentsSector } from './styles'

type variantTypes = 'primary' | 'secondary' | 'tertiary' | 'skeleton'

const ComponentsSectorButton = () => {
  const [variant, setVariant] = useState<variantTypes>('primary')
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <li>
      <div>
        {variant !== 'skeleton' && (
          <Button variant={variant} $loading={loading}>
            {loading ? <div className="spinner" /> : 'Text of button'}
          </Button>
        )}
        {variant === 'skeleton' && (
          <ButtonSkeleton>Text of button</ButtonSkeleton>
        )}
      </div>
      <label htmlFor="selectLoading">Button</label>
      <select
        id="selectLoading"
        name="select"
        onChange={(e) => setVariant(e.target.value as variantTypes)}
      >
        <option value="primary" selected>
          Primary
        </option>
        <option value="secondary">Secondary</option>
        <option value="tertiary">Tertiary</option>
        <option value="skeleton">Skeleton</option>
      </select>

      <span style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        <input
          id="buttonLoading"
          type="checkbox"
          onChange={(e) => setLoading(e.target.checked)}
        />
        <label htmlFor="buttonLoading">Loading?</label>
      </span>
    </li>
  )
}

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
