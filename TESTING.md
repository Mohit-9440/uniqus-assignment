# Testing Documentation

## Overview

This project uses **Vitest** for unit testing and **Storybook** for component documentation and visual testing.

## Unit Testing with Vitest

### Setup

- **Framework**: Vitest (Vite-native test runner)
- **Testing Library**: React Testing Library
- **Environment**: jsdom (for DOM simulation)
- **Matchers**: @testing-library/jest-dom

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (recommended for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests with UI (interactive)
npm run test:ui
```

### Test Structure

Tests are located alongside components:
- Component tests: `ComponentName.test.tsx`
- Utility tests: `utility.test.ts`

### Example Test Files

1. **MetricCard.test.tsx** - Tests for the MetricCard component
   - Renders with title and value
   - Applies custom className
   - Handles different icon background colors

2. **StatusBadge.test.tsx** - Tests for the StatusBadge component
   - Renders different status types (shipped, processing, cancelled)
   - Applies custom className

3. **Pagination.test.tsx** - Tests for the Pagination component
   - Renders pagination controls
   - Disables buttons on first/last page
   - Handles click events
   - Highlights current page

4. **cn.test.ts** - Tests for the utility function
   - Merges class names correctly
   - Handles conditional classes
   - Handles undefined/null values

### Writing Tests

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Component } from './Component'

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component prop="value" />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

### Test Coverage

Coverage reports are generated in the `coverage/` directory. Aim for:
- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

## Component Documentation with Storybook

### Setup

- **Version**: Storybook 10.0.6
- **Framework**: React + Vite
- **Addons**: Docs, A11y, Vitest integration

### Running Storybook

```bash
# Start Storybook development server
npm run storybook

# Build Storybook for static hosting
npm run build-storybook
```

Storybook will be available at `http://localhost:6006`

### Story Structure

Stories are located alongside components:
- Component stories: `ComponentName.stories.tsx`

### Example Story Files

1. **MetricCard.stories.tsx** - Stories for MetricCard
   - Individual metric card variants
   - All variants showcase

2. **StatusBadge.stories.tsx** - Stories for StatusBadge
   - All status types
   - All statuses showcase

3. **Pagination.stories.tsx** - Stories for Pagination
   - First page, middle page, last page
   - Few pages, many pages scenarios

4. **ComingSoon.stories.tsx** - Stories for ComingSoon
   - Default and custom titles

### Writing Stories

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { Component } from './Component'

const meta = {
  title: 'Category/Component',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    prop: 'value',
  },
}
```

### Storybook Features

- **Auto-generated Docs**: Documentation is automatically generated from stories
- **Accessibility Testing**: A11y addon checks for accessibility issues
- **Interactive Controls**: Adjust component props in real-time
- **Viewport Testing**: Test components at different screen sizes
- **Dark Mode**: Test components in different themes

## Best Practices

### Testing

1. **Test user behavior, not implementation details**
2. **Use semantic queries** (getByRole, getByLabelText)
3. **Test accessibility** (keyboard navigation, screen readers)
4. **Keep tests simple and focused**
5. **Use descriptive test names**

### Storybook

1. **Create stories for all component variants**
2. **Document props and usage**
3. **Include edge cases and error states**
4. **Use controls for interactive testing**
5. **Add documentation with MDX when needed**

## Continuous Integration

Tests should run automatically in CI/CD pipelines:

```yaml
# Example GitHub Actions
- name: Run tests
  run: npm test

- name: Build Storybook
  run: npm run build-storybook
```

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Storybook Documentation](https://storybook.js.org/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

