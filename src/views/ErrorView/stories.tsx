import { Story, Meta } from '@storybook/react/types-6-0'

import ErrorView from '.'

export default {
  title: 'ErrorView',
  component: ErrorView
} as Meta

const Template: Story = (args) => <ErrorView {...args} />

export const Basic = Template.bind({})
