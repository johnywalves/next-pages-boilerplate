import { useState } from 'react'

import Button, { ButtonSkeleton } from 'components/button'

type variantTypes = 'primary' | 'secondary' | 'tertiary' | 'skeleton'

const ComponentsSectorButton = () => {
  const [variant, setVariant] = useState<variantTypes>('primary')
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <li>
      <h3>Button</h3>
      <div>
        {variant !== 'skeleton' && (
          <Button variant={variant} loading={loading}>
            Text of button
          </Button>
        )}
        {variant === 'skeleton' && (
          <ButtonSkeleton>Text of button</ButtonSkeleton>
        )}
      </div>
      <label htmlFor="selectVariant">Variants</label>
      <select
        id="selectVariant"
        data-testid="select-variant"
        name="select"
        defaultValue={variant}
        onChange={(e) => setVariant(e.target.value as variantTypes)}
      >
        <option value="primary" data-testid="option-variant">
          Primary
        </option>
        <option value="secondary" data-testid="option-variant">
          Secondary
        </option>
        <option value="tertiary" data-testid="option-variant">
          Tertiary
        </option>
        <option value="skeleton" data-testid="option-variant">
          Skeleton
        </option>
      </select>

      <span style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        <input
          id="buttonLoading"
          data-testid="button-loading"
          type="checkbox"
          onChange={(e) => setLoading(e.target.checked)}
          disabled={variant === 'skeleton'}
        />
        <label
          htmlFor="buttonLoading"
          style={
            variant === 'skeleton' ? { color: 'var(--color-neutral-400)' } : {}
          }
        >
          Loading?
        </label>
      </span>
    </li>
  )
}

export default ComponentsSectorButton
