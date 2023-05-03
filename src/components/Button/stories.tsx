import { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Texto do botão'
  }
}

export const Primary: StoryObj<typeof Button> = {
  args: {}
}

export default meta
