import { Story, Meta } from '@storybook/react/types-6-0'

import Home from '.'
import manifest from '../../../public/manifest.json'

export default {
  title: 'Home',
  component: Home,
  args: {
    title: 'Default'
  }
} as Meta

const Template: Story = (args) => <Home {...args} />

export const Basic = Template.bind({})

Basic.args = {
  title: manifest.name
}
