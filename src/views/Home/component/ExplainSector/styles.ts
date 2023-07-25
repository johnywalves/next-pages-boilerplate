'use client'

import styled from 'styled-components'
import { SectionSizeAndSpacing } from 'views/Home/styles'

export const ExplainHome = styled.section`
  ${SectionSizeAndSpacing}

  background-color: var(--color-background-800);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    & > p {
      width: max(80%, 350px);

      font-size: 1.5rem;
      text-align: left;

      strong {
        color: var(--color-secondary);
      }
    }
  }
`
