import { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Texto do botão'
  }
}

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {}
}

export default meta
