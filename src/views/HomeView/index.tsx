import Layout from 'components/Layout'

import manifest from '../../../public/manifest.json'
import {
  LogoHomeView,
  TitleHomeView,
  DescriptionHomeView,
  IllustrationHomeView,
  JustHomeView,
  CodeHomeView
} from './styles'

const HomeView = ({
  title = manifest.name,
  description = manifest.description
}) => (
  <Layout>
    <LogoHomeView
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <TitleHomeView>{title}</TitleHomeView>
    <DescriptionHomeView>{description}</DescriptionHomeView>
    <IllustrationHomeView src="/img/hero.svg" alt="Uma moça de jaqueta " />
    <JustHomeView>just run</JustHomeView>
    <CodeHomeView>
      <p>
        [npx or yarn] create next-app -e
        https://github.com/johnywalves/react-next-boilerplate
      </p>
    </CodeHomeView>
  </Layout>
)

export default HomeView
