import { render } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
