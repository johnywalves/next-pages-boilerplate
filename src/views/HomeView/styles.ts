import styled from 'styled-components'

export const LogoHomeView = styled.img`
  width: min(var(--300px), 50%);
`

export const TitleHomeView = styled.h1`
  color: var(--color-primary);
  font-size: 2rem;
`

export const DescriptionHomeView = styled.h2`
  font-size: 1.5rem;
  line-height: 140%;
  font-weight: 400;
  width: min(var(--720px), 80%);
`

export const IllustrationHomeView = styled.img`
  margin: var(--20px) 0;
  width: min(var(--320px), 100%);
`

export const JustHomeView = styled.p`
  font-size: 1.5rem;
`

export const CodeHomeView = styled.code`
  background-color: var(--color-code);
  font-size: 1rem;
  font-weight: 900;
  padding: 1rem;
  border: 1px solid var(--color-text);
`
