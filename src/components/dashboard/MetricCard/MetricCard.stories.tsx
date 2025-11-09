import type { Meta, StoryObj } from '@storybook/react'
import { MetricCard } from './MetricCard'
import { TrendingUp, Users, DollarSign, BarChart3 } from 'lucide-react'

const meta: Meta<typeof MetricCard> = {
  title: 'Dashboard/MetricCard',
  component: MetricCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconBgColor: {
      control: 'select',
      options: ['blue', 'yellow', 'gray', 'pink'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const NewSales: Story = {
  args: {
    title: 'New sales',
    value: '1.345',
    icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
    iconBgColor: 'blue',
  },
}

export const NewLeads: Story = {
  args: {
    title: 'New leads',
    value: '2.890',
    icon: <Users className="w-5 h-5 text-yellow-600" />,
    iconBgColor: 'yellow',
  },
}

export const IncomePerLead: Story = {
  args: {
    title: 'Income per lead',
    value: '$1.870',
    icon: <DollarSign className="w-5 h-5 text-gray-600" />,
    iconBgColor: 'gray',
  },
}

export const ConversionRate: Story = {
  args: {
    title: 'Conversion rate',
    value: '5.10%',
    icon: <BarChart3 className="w-5 h-5 text-pink-600" />,
    iconBgColor: 'pink',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[800px]">
      <MetricCard
        title="New sales"
        value="1.345"
        icon={<TrendingUp className="w-5 h-5 text-blue-600" />}
        iconBgColor="blue"
      />
      <MetricCard
        title="New leads"
        value="2.890"
        icon={<Users className="w-5 h-5 text-yellow-600" />}
        iconBgColor="yellow"
      />
      <MetricCard
        title="Income per lead"
        value="$1.870"
        icon={<DollarSign className="w-5 h-5 text-gray-600" />}
        iconBgColor="gray"
      />
      <MetricCard
        title="Conversion rate"
        value="5.10%"
        icon={<BarChart3 className="w-5 h-5 text-pink-600" />}
        iconBgColor="pink"
      />
    </div>
  ),
}

