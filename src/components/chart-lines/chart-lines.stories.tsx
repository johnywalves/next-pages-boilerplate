import { Meta, StoryObj } from '@storybook/react'

import ChartLines, { ChartLinesSkeleton } from '.'
import population from './data/world-population'

const meta: Meta<typeof ChartLines> = {
  title: 'Chart Lines',
  component: ChartLines,
  tags: ['autodocs'],
  args: {
    width: 800,
    height: 650
  }
}

type Story = StoryObj<typeof ChartLines>

export const Primary: Story = {
  args: {
    chartData: population
  }
}

export const Skeleton: Story = {
  render: () => <ChartLinesSkeleton />,
  args: {}
}

export default meta
