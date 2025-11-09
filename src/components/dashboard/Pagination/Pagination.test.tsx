import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 10,
    onPageChange: vi.fn(),
    onPrev: vi.fn(),
    onNext: vi.fn(),
  }

  it('renders pagination controls', () => {
    render(<Pagination {...defaultProps} />)
    expect(screen.getByText(/PREV/i)).toBeInTheDocument()
    expect(screen.getByText(/NEXT/i)).toBeInTheDocument()
  })

  it('disables prev button on first page', () => {
    render(<Pagination {...defaultProps} currentPage={1} />)
    const prevButton = screen.getByText(/PREV/i)
    expect(prevButton).toBeDisabled()
  })

  it('disables next button on last page', () => {
    render(<Pagination {...defaultProps} currentPage={10} totalPages={10} />)
    const nextButton = screen.getByText(/NEXT/i)
    expect(nextButton).toBeDisabled()
  })

  it('calls onPrev when prev button is clicked', async () => {
    const user = userEvent.setup()
    const onPrev = vi.fn()
    render(<Pagination {...defaultProps} currentPage={2} onPrev={onPrev} />)
    
    const prevButton = screen.getByText(/PREV/i)
    await user.click(prevButton)
    
    expect(onPrev).toHaveBeenCalledTimes(1)
  })

  it('calls onNext when next button is clicked', async () => {
    const user = userEvent.setup()
    const onNext = vi.fn()
    render(<Pagination {...defaultProps} currentPage={1} onNext={onNext} />)
    
    const nextButton = screen.getByText(/NEXT/i)
    await user.click(nextButton)
    
    expect(onNext).toHaveBeenCalledTimes(1)
  })

  it('calls onPageChange when page number is clicked', async () => {
    const user = userEvent.setup()
    const onPageChange = vi.fn()
    render(<Pagination {...defaultProps} onPageChange={onPageChange} />)
    
    const pageButton = screen.getByText('2')
    await user.click(pageButton)
    
    expect(onPageChange).toHaveBeenCalledWith(2)
  })

  it('highlights current page', () => {
    render(<Pagination {...defaultProps} currentPage={3} />)
    const currentPageButton = screen.getByText('3')
    expect(currentPageButton).toHaveClass('bg-blue-600', 'text-white')
  })
})

