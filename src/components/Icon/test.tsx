import { render } from '@testing-library/react'

import Icon, { Book } from '.'

describe('<Icon />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Icon>
        <Book />
      </Icon>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
