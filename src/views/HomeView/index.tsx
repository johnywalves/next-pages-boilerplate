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
      alt="Image with curly brackets in magenta with the text React Next Boilerplate"
    />
    <TitleHomeView>{title}</TitleHomeView>
    <DescriptionHomeView>{description}</DescriptionHomeView>
    <IllustrationHomeView
      src="/img/hero.svg"
      alt="Woman in jacket running into an atom"
    />
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
