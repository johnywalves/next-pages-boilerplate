import { Meta, StoryObj } from '@storybook/react'

import NotFound from '.'

const meta: Meta<typeof NotFound> = {
  title: 'NotFound',
  component: NotFound
}

type Story = StoryObj<typeof NotFound>

export const Primary: Story = {
  args: {}
}

export default meta
