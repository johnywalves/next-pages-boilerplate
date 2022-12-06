import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-primary);
  border-radius: var(--4px);
  padding: var(--16px) var(--24px);
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.25s;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-text);
  }
`

export default Button
