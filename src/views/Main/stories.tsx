import { Story, Meta } from '@storybook/react/types-6-0'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default'
  }
} as Meta

const Template: Story = (args) => <Main {...args} />

export const Basic = Template.bind({})

Basic.args = {
  title: 'React Avançado'
}
