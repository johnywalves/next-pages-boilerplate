'use client'

import styled from 'styled-components'
import { SectionSizeAndSpacing } from 'views/Home/styles'

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

    & svg {
      color: var(--color-tertiary);
    }

    & h3 {
      color: var(--color-primary);
      font-size: 1.75rem;
    }

    & p {
      width: 20rem;
      font-size: 1.25rem;
      text-align: center;
    }
  }
`
