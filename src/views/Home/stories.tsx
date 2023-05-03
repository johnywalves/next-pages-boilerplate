import { Meta, StoryObj } from '@storybook/react'

import Home from '.'
import manifest from '../../../public/manifest.json'

const meta: Meta<typeof Home> = {
  title: 'Home',
  component: Home,
  args: {}
}

export const Primary: StoryObj<typeof Home> = {
  args: {
    title: manifest.name
  }
}

export default meta
