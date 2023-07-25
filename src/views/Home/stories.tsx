import { Meta, StoryObj } from '@storybook/react'

import manifest from '../../../public/manifest.json'

import Home from '.'

const meta: Meta<typeof Home> = {
  title: 'Home',
  component: Home
}

type Story = StoryObj<typeof Home>

export const Primary: Story = {
  args: {
    title: manifest.name
  }
}

export default meta
