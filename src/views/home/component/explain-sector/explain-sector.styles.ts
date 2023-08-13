import styled from 'styled-components'
import { SectionSizeAndSpacing } from 'views/home/home.styles'

export const ExplainHome = styled.section`
  ${SectionSizeAndSpacing}

  background-color: var(--color-neutral-200);
  color: var(--color-neutral-800);

  & > div {
    padding: 0 2rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }
`

export const IlustrationExplainHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  & picture {
    display: block;
    width: 100%;
    height: 360px;
    background-color: var(--color-neutral-300);
  }
`

export const TextExplainHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  & > p {
    width: 100%;

    font-size: 1.5rem;
    text-align: left;

    strong {
      color: var(--color-secondary-pure);
    }
  }
`
