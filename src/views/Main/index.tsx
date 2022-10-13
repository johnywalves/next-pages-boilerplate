import {
  WrapperMain,
  LogoMain,
  TitleMain,
  DescriptionMain,
  IllustrationMain
} from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <WrapperMain>
    <LogoMain
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <TitleMain>{title}</TitleMain>
    <DescriptionMain>{description}</DescriptionMain>
    <IllustrationMain
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </WrapperMain>
)

export default Main
