import {
  LogoHome,
  TitleHome,
  DescriptionHome,
  IllustrationHome,
  JustHome,
  CodeHome,
  HeroHome
} from './hero-sector.styles'

const HeroSector = ({
  title,
  description
}: {
  title: string
  description: string
}) => (
  <HeroHome>
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
        npx create-next-app -e
        https://github.com/johnywalves/react-next-boilerplate
      </p>
    </CodeHome>
  </HeroHome>
)

export default HeroSector
