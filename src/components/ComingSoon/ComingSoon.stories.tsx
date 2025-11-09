import type { Meta, StoryObj } from '@storybook/react'
import { ComingSoon } from './ComingSoon'

const meta: Meta<typeof ComingSoon> = {
  title: 'Components/ComingSoon',
  component: ComingSoon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const CustomTitle: Story = {
  args: {
    title: 'Projects',
  },
}

export const LongTitle: Story = {
  args: {
    title: 'Help Center',
  },
}

