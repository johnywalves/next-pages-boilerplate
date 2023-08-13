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

export const PrimaryLoading: Story = {
  args: {
    loading: true
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
}

export const SecondaryLoading: Story = {
  args: {
    variant: 'secondary',
    loading: true
  }
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary'
  }
}

export const TertiaryLoading: Story = {
  args: {
    variant: 'tertiary',
    loading: true
  }
}

export const Skeleton: Story = {
  render: () => <ButtonSkeleton>Texto do botão</ButtonSkeleton>,
  args: {}
}

export default meta
