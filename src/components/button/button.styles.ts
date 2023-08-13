import styled, { css } from 'styled-components'

const primaryButton = css`
  background-color: var(--color-primary-pure);

  &:hover,
  &:focus {
    background-color: var(--color-primary-half);
  }
`

const secondaryButton = css`
  background-color: var(--color-secondary-pure);
  border-color: var(--color-secondary-pure);

  &:hover,
  &:focus {
    background-color: var(--color-secondary-half);
  }
`

const tertiaryButton = css`
  background-color: var(--color-tertiary-pure);
  border-color: var(--color-tertiary-pure);

  &:hover,
  &:focus {
    background-color: var(--color-tertiary-half);
  }
`

const loadingButton = css`
  min-width: 10rem;
  opacity: 0.75;
  pointer-events: none;
`

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  /**
   * Button design variance
   */
  variant: 'primary' | 'secondary' | 'tertiary'
  /**
   * Button loading
   */
  $loading: boolean
}

export const WrapperButton = styled.button<ButtonProps>`
  color: var(--color-neutral-100);
  border: var(--2px) solid var(--color-primary-pure);
  border-radius: var(--16px);
  padding: var(--16px) var(--24px);

  font-size: 1.25rem;
  font-weight: 600;

  cursor: pointer;
  transition:
    background-color 0.25s,
    color 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
  }

  &:hover,
  &:focus {
    color: var(--color-neutral-200);
    border-color: var(--color-neutral-200);
  }

  &.skeleton {
    min-width: 8rem;
  }

  ${({ variant }) => {
    if (variant === 'secondary') {
      return secondaryButton
    }

    if (variant === 'tertiary') {
      return tertiaryButton
    }

    return primaryButton
  }}

  ${({ $loading }) => $loading && loadingButton}
`
