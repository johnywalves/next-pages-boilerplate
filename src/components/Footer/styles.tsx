import styled from 'styled-components'

export const WrapperFooter = styled.div`
  padding: 2rem;
  color: var(--color-neutral-100);

  & span {
    color: var(--color-danger);
  }

  & a {
    color: var(--color-primary);

    &:hover {
      text-decoration: underline;
    }
  }
`
