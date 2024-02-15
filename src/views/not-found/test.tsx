import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import NotFound from '.'

describe('<NotFound />', () => {
  it('should render the heading', () => {
    const { container } = render(<NotFound />)

    expect(
      screen.getByRole('heading', { name: /página não encontrada!/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<NotFound />)

    expect(container.firstChild).toHaveStyleRule(
      'color',
      'var(--color-primary-pure)'
    )
  })
})
