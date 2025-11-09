import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MetricCard } from './MetricCard'
import { TrendingUp } from 'lucide-react'

describe('MetricCard', () => {
  it('renders with title and value', () => {
    render(
      <MetricCard
        title="New sales"
        value="1.345"
        icon={<TrendingUp className="w-5 h-5" />}
        iconBgColor="blue"
      />
    )

    expect(screen.getByText('New sales')).toBeInTheDocument()
    expect(screen.getByText('1.345')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <MetricCard
        title="Test"
        value="123"
        icon={<TrendingUp className="w-5 h-5" />}
        iconBgColor="blue"
        className="custom-class"
      />
    )

    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('renders with different icon background colors', () => {
    const { rerender } = render(
      <MetricCard
        title="Test"
        value="123"
        icon={<TrendingUp className="w-5 h-5" />}
        iconBgColor="blue"
      />
    )

    expect(screen.getByText('Test')).toBeInTheDocument()

    rerender(
      <MetricCard
        title="Test"
        value="123"
        icon={<TrendingUp className="w-5 h-5" />}
        iconBgColor="yellow"
      />
    )

    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})

