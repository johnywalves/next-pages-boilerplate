import { Story, Meta } from '@storybook/react/types-6-0'

import HomeView from '.'
import manifest from '../../../public/manifest.json'

export default {
  title: 'HomeView',
  component: HomeView,
  args: {
    title: 'Default'
  }
} as Meta

const Template: Story = (args) => <HomeView {...args} />

export const Basic = Template.bind({})

Basic.args = {
  title: manifest.name
}
