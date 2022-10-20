import styled from 'styled-components'

export const WrapperLayout = styled.main`
  background-color: var(--color-background);
  color: var(--color-text);
  width: 100%;
  min-height: 100%;
  padding: var(--30px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--16px);

  & button {
    background-color: transparent;
    color: var(--color-text);
    border: 1px solid var(--color-primary);
    padding: var(--16px) var(--24px);
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.25s;

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-text);
    }
  }
`
