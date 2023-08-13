import { Meta, StoryObj } from '@storybook/react'

import Button, { ButtonSkeleton } from '.'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  render: ({ children, ...rest }) => (
    <Button {...rest}>
      <p>{children}</p>
    </Button>
  ),
  args: {
    children: 'Texto do botão'
  }
}

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {}
}

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary'
  }
}

export const Skeleton: Story = {
  render: () => <ButtonSkeleton />,
  args: {}
}

export default meta
