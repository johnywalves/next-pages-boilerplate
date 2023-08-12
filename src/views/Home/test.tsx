import { render, screen } from '@testing-library/react'

import manifest from '../../../public/manifest.json'

import Home from '.'

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
      'background-color',
      'var(--color-neutral-100)'
    )
  })
})
