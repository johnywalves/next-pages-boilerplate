import styled from 'styled-components'

export const WrapperMain = styled.main`
  background-color: var(--color-background);
  color: var(--color-text);
  width: 100%;
  height: 100%;
  padding: var(--30px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoMain = styled.img`
  width: var(--250px);
  margin-bottom: var(--20px);
`

export const TitleMain = styled.h1`
  font-size: 2rem;
`

export const DescriptionMain = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
`

export const IllustrationMain = styled.img`
  margin-top: var(--30px);
  width: min(var(--300px), 100%);
`
