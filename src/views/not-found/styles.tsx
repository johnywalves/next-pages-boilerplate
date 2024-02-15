import Link from 'next/link'

import styled from 'styled-components'

export const TitleNotFound = styled.h1`
  color: var(--color-primary-pure);
  text-align: center;
`

export const SubtitleNotFound = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: var(--20px) 0;
`

export const HomeNotFound = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`
