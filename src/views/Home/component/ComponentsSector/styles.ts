import styled from 'styled-components'
import { SectionSizeAndSpacing } from 'views/Home/styles'

export const WrapperComponentsSector = styled.section`
  ${SectionSizeAndSpacing}
  gap: 2rem;

  background-color: var(--color-neutral-100);
  color: var(--color-neutral-800);
  font-size: 1.5rem;
`

export const ListComponentsSector = styled.ul`
  list-style: none;
  width: 100%;
  font-size: 1rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--32px);

  & li {
    display: flex;
    flex-direction: column;
    gap: var(--16px);

    padding: var(--16px);
    border-radius: var(--16px);
    box-shadow:
      0 0 8px 1px var(--color-shadow),
      4px 4px 8px 1px var(--color-shadow);

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: var(--color-neutral-600);
      border-radius: var(--16px);
      padding: var(--32px);
    }
  }
`
