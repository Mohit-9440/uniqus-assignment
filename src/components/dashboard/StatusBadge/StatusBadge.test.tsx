import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatusBadge } from './StatusBadge'

describe('StatusBadge', () => {
  it('renders shipped status correctly', () => {
    render(<StatusBadge status="shipped" />)
    expect(screen.getByText('Shipped')).toBeInTheDocument()
  })

  it('renders processing status correctly', () => {
    render(<StatusBadge status="processing" />)
    expect(screen.getByText('Processing')).toBeInTheDocument()
  })

  it('renders cancelled status correctly', () => {
    render(<StatusBadge status="cancelled" />)
    expect(screen.getByText('Cancelled')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <StatusBadge status="shipped" className="custom-class" />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })
})

