import { render } from '@testing-library/react'

import ChartLines from '.'
import data from './data/world-population'

describe('<ChartLines />', () => {
  it('should render chart of world population', () => {
    const { container } = render(<ChartLines chartData={data} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
