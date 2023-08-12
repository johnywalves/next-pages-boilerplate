import Footer from 'views/Home/component/Footer'

import manifest from '../../../public/manifest.json'

import BenefitsSector from './component/BenefitsSector'
import ComponentsSector from './component/ComponentsSector'
import ExplainSector from './component/ExplainSector'
import HeroSector from './component/HeroSector'

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
