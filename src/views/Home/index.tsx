'use client'

import manifest from '../../../public/manifest.json'
import {
  LogoHome,
  TitleHome,
  DescriptionHome,
  IllustrationHome,
  JustHome,
  CodeHome
} from './styles'

const Home = ({
  title = manifest.name,
  description = manifest.description
}) => (
  <>
    <LogoHome
      src="/img/logo.svg"
      alt="Image with curly brackets in magenta with the text React Next Boilerplate"
    />
    <TitleHome>{title}</TitleHome>
    <DescriptionHome>{description}</DescriptionHome>
    <IllustrationHome
      src="/img/hero.svg"
      alt="Woman in jacket running into an atom"
    />
    <JustHome>just run</JustHome>
    <CodeHome>
      <p>
        [npx or yarn] create next-app -e
        https://github.com/johnywalves/react-next-boilerplate
      </p>
    </CodeHome>
  </>
)

export default Home
