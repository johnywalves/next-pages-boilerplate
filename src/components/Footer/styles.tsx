import styled from 'styled-components'

export const WrapperFooter = styled.div`
  padding: 2rem;

  & span {
    color: red;
  }

  & a {
    color: var(--color-primary);

    &:hover {
      text-decoration: underline;
    }
  }
`
