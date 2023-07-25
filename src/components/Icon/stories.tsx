import { Meta, StoryObj } from '@storybook/react'

import Icon from '.'

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  args: {}
}

type Story = StoryObj<typeof Icon>

export const Primary: Story = {
  args: {}
}

export default meta
