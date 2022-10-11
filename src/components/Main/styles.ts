import styled from 'styled-components'

export const Wrapper = styled.main`
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

export const Logo = styled.img`
  width: var(--250px);
  margin-bottom: var(--20px);
`

export const Title = styled.h1`
  font-size: var(--25px);
`

export const Description = styled.h2`
  font-size: var(--20px);
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: var(--30px);
  width: min(var(--300px), 100%);
`
