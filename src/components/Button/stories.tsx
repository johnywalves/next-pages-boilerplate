import { Story, Meta } from '@storybook/react/types-6-0'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Texto do botão'
  }
} as Meta

const Template: Story = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
)

export const Basic = Template.bind({})

Basic.args = {}
