import Layout from 'components/Layout'

import { ErrorViewTitle, ErrorViewSubtitle, ErrorViewHome } from './styles'

const ErrorView = () => (
  <Layout>
    <ErrorViewTitle>Página não encontrada!</ErrorViewTitle>
    <ErrorViewSubtitle>
      Volte para paǵina anterior ou clique no logo para ir para a página
      principal
    </ErrorViewSubtitle>
    <ErrorViewHome href="/" passHref>
      <button>Ir para página inicial</button>
    </ErrorViewHome>
  </Layout>
)

export default ErrorView
