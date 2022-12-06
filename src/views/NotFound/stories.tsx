import { Story, Meta } from '@storybook/react/types-6-0'

import Error from '.'

export default {
  title: 'Error',
  component: Error
} as Meta

const Template: Story = (args) => <Error {...args} />

export const Basic = Template.bind({})
