import { render, screen } from '@testing-library/react'

import Button from '.'

const content = 'Texto do botão'

const Component = () => (
  <Button>
    <p role="text">{content}</p>
  </Button>
)

describe('<Button />', () => {
  it('should render the button and content', () => {
    const { container } = render(<Component />)

    expect(screen.getByRole('button')).toBeInTheDocument()

    expect(screen.getByRole('text')).toBeInTheDocument()

    expect(screen.getByText(content)).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    render(<Component />)

    const button = screen.getByRole('button')

    expect(button).toHaveStyleRule('color', 'var(--color-neutral-100)')

    expect(button).toHaveStyleRule(
      'background-color',
      'var(--color-primary-pure)'
    )
  })
})
