'use client'

import styled from 'styled-components'

export const HeroHome = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: var(--30px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const LogoHome = styled.img`
  width: min(var(--300px), 50%);
`

export const TitleHome = styled.h1`
  color: var(--color-primary);
  font-size: 2rem;
`

export const DescriptionHome = styled.h2`
  font-size: 1.5rem;
  line-height: 140%;
  font-weight: 400;
  width: min(var(--720px), 80%);
`

export const IllustrationHome = styled.img`
  margin: var(--20px) 0;
  width: min(var(--320px), 100%);
`

export const JustHome = styled.p`
  font-size: 1.5rem;
`

export const CodeHome = styled.code`
  background-color: var(--color-neutral-700);
  font-size: 1rem;
  font-weight: 900;
  padding: 1rem;

  display: flex;
  flex-direction: row;

  border: 1px solid var(--color-neutral-100);
  border-radius: var(--4px);
`
