import type { Meta, StoryObj } from '@storybook/react'
import { StatusBadge } from './StatusBadge'

const meta: Meta<typeof StatusBadge> = {
  title: 'Dashboard/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['shipped', 'processing', 'cancelled'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Shipped: Story = {
  args: {
    status: 'shipped',
  },
}

export const Processing: Story = {
  args: {
    status: 'processing',
  },
}

export const Cancelled: Story = {
  args: {
    status: 'cancelled',
  },
}

export const AllStatuses: Story = {
  render: () => (
    <div className="flex gap-4">
      <StatusBadge status="shipped" />
      <StatusBadge status="processing" />
      <StatusBadge status="cancelled" />
    </div>
  ),
}

