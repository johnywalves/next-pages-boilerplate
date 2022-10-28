import { render, screen } from '@testing-library/react'

import Home from '.'
import manifest from '../../../public/manifest.json'

describe('<HomeView />', () => {
  it('should render the heading', () => {
    const { container } = render(<Home />)

    expect(
      screen.getByRole('heading', { name: manifest.name })
    ).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Home />)

    expect(container.childNodes[1]).toHaveStyleRule(
      'color',
      'var(--color-primary)'
    )
  })
})
