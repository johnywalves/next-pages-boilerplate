import { Story, Meta } from '@storybook/react/types-6-0'

import Layout from '.'

export default {
  title: 'Layout',
  component: Layout
} as Meta

const Template: Story = ({ children, ...rest }) => (
  <Layout {...rest}>{children}</Layout>
)

export const Basic = Template.bind({})
