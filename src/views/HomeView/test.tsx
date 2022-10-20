import { render, screen } from '@testing-library/react'

import HomeView from '.'
import manifest from '../../../public/manifest.json'

describe('<HomeView />', () => {
  it('should render the heading', () => {
    const { container } = render(<HomeView />)

    expect(
      screen.getByRole('heading', { name: manifest.name })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<HomeView />)

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'var(--color-background)'
    )
  })
})
