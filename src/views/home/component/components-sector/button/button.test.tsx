import { render, screen, fireEvent } from '@testing-library/react'

import ComponentsSectorButton from '.'

describe('<ComponentsSectorButton />', () => {
  it('checking button variants', () => {
    render(<ComponentsSectorButton />)

    const options = screen.getAllByTestId(
      'option-variant'
    ) as HTMLOptionElement[]

    const selectVariant = screen.getByTestId('select-variant')

    fireEvent.change(selectVariant, { target: { value: 'secondary' } })
    expect(options[0].selected).toBeFalsy()
    expect(options[1].selected).toBeTruthy()
    expect(options[2].selected).toBeFalsy()
    expect(options[3].selected).toBeFalsy()

    fireEvent.change(selectVariant, { target: { value: 'skeleton' } })
    expect(options[0].selected).toBeFalsy()
    expect(options[1].selected).toBeFalsy()
    expect(options[2].selected).toBeFalsy()
    expect(options[3].selected).toBeTruthy()
  })

  it('checking button loading', () => {
    render(<ComponentsSectorButton />)

    const buttonLoading = screen.getByTestId('button-loading')
    fireEvent.click(buttonLoading)
  })
})
