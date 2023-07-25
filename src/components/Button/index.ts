import styled, { css } from 'styled-components'

export { default as ButtonSkeleton } from './skeleton'

const primaryButton = css`
  &:hover,
  &:focus {
    background-color: var(--color-primary);
  }
`

const secondaryButton = css`
  border-color: var(--color-secondary);

  &:hover,
  &:focus {
    background-color: var(--color-secondary);
  }
`

const tertiaryButton = css`
  border-color: var(--color-tertiary);

  &:hover,
  &:focus {
    background-color: var(--color-tertiary);
  }
`

export type ButtonProps = {
  /**
   * Variância de design do botão
   */
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  color: var(--color-text);
  border: var(--2px) solid var(--color-primary);
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
    color: var(--color-background);
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
`

export default Button
