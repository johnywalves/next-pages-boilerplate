import Footer from 'views/home/component/footer'

import manifest from '../../../public/manifest.json'

import BenefitsSector from './component/benefits-sector'
import ComponentsSector from './component/components-sector'
import ExplainSector from './component/explain-sector'
import HeroSector from './component/hero-sector'

const Home = ({
  title = manifest.name,
  description = manifest.description
}) => (
  <>
    <HeroSector title={title} description={description} />
    <ExplainSector />
    <BenefitsSector />
    <ComponentsSector />
    <Footer />
  </>
)

export default Home
