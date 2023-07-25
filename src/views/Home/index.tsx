'use client'

import Footer from 'components/Footer'

import manifest from '../../../public/manifest.json'

import BenefitsSector from './component/BenefitsSector'
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
    <Footer />
  </>
)

export default Home
