import { Meta, StoryObj } from '@storybook/react'

import Error from '.'

const meta: Meta<typeof Error> = {
  title: 'Error',
  component: Error
}

export const Primary: StoryObj<typeof Error> = {
  args: {}
}

export default meta
