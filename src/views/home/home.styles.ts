import { css } from 'styled-components'

export const SectionSizeAndSpacing = css`
  width: 100%;
  padding: 4rem max(calc((100vw - 80rem) / 2), 2rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  & h2 {
    font-size: 2rem;
  }
`
