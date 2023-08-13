import styled from 'styled-components'
import { SectionSizeAndSpacing } from 'views/home/home.styles'

export const BenefitsHome = styled.section`
  ${SectionSizeAndSpacing}

  & ul {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  & li {
    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    & h3 {
      color: var(--color-tertiary-pure);
      font-size: 1.75rem;
    }

    & p {
      width: 20rem;
      font-size: 1.25rem;
      text-align: center;
    }
  }
`
