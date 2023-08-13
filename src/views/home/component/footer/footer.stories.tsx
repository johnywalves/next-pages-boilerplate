import { Meta, StoryObj } from '@storybook/react'

import Footer from '.'

const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
  tags: ['autodocs'],
  args: {}
}

type Story = StoryObj<typeof Footer>

export const Primary: Story = {
  args: {}
}

export default meta
