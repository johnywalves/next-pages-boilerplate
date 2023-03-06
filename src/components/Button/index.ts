import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  color: var(--color-text);
  border: var(--2px) solid var(--color-primary);
  border-radius: var(--4px);
  padding: var(--16px) var(--24px);
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.25s, color 0.5s;

  &:hover,
  &:focus {
    background-color: var(--color-primary);
    color: var(--color-background);
  }
`

export default Button
