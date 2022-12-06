import Button from 'components/Button'

import { TitleError, SubtitleError, HomeError } from './styles'

const NotFound = () => (
  <>
    <TitleError>Página não encontrada!</TitleError>
    <SubtitleError>
      Volte para página anterior ou clique no botão para ir para a página
      principal
    </SubtitleError>
    <HomeError href="/" passHref>
      <Button>Ir para página inicial</Button>
    </HomeError>
  </>
)

export default NotFound
