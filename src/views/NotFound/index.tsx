import Button from 'components/Button'

import { TitleNotFound, SubtitleNotFound, HomeNotFound } from './styles'

const NotFound = () => (
  <>
    <TitleNotFound>Página não encontrada!</TitleNotFound>
    <SubtitleNotFound>
      Volte para página anterior ou clique no botão para ir para a página
      principal
    </SubtitleNotFound>
    <HomeNotFound href="/" passHref>
      <Button>Ir para página inicial</Button>
    </HomeNotFound>
  </>
)

export default NotFound
