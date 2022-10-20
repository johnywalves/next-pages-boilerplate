import { render, screen } from '@testing-library/react'

import Layout from '.'

describe('<Layout />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Layout>
        <h1>Layout</h1>
      </Layout>
    )

    expect(screen.getByRole('heading', { name: /layout/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
