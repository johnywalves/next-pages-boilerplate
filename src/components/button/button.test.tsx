import { render, screen } from '@testing-library/react'

import Button, { ButtonSkeleton } from '.'

const content = 'Texto do botão'

describe('<Button />', () => {
  it('should render the button and content', () => {
    const { container } = render(
      <Button>
        <p role="text">{content}</p>
      </Button>
    )

    expect(screen.getByRole('button')).toBeInTheDocument()

    expect(screen.getByRole('text')).toBeInTheDocument()

    expect(screen.getByText(content)).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    render(
      <Button>
        <p role="text">{content}</p>
      </Button>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveStyleRule('color', 'var(--color-neutral-100)')

    expect(button).toHaveStyleRule(
      'background-color',
      'var(--color-primary-pure)'
    )
  })

  it('should render the secondary', () => {
    const { container } = render(<Button variant="secondary">text test</Button>)
    expect(container).toMatchSnapshot()
  })

  it('should render the tertiary', () => {
    const { container } = render(<Button variant="tertiary">text test</Button>)
    expect(container).toMatchSnapshot()
  })

  it('should render the skeleton', () => {
    const { container } = render(<ButtonSkeleton />)
    expect(container).toMatchSnapshot()
  })
})
