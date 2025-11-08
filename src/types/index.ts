// Base component props
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// Common UI element types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info'

// Dashboard specific types
export interface DashboardCard {
  id: string
  title: string
  value: string | number
  change?: number
  changeType?: 'increase' | 'decrease'
  icon?: React.ReactNode
}

export interface TableColumn<T = any> {
  key: string
  label: string
  render?: (value: any, row: T) => React.ReactNode
  sortable?: boolean
}

export interface TableRow {
  id: string
  [key: string]: any
}

// Navigation types
export interface NavItem {
  id: string
  label: string
  path: string
  icon?: React.ReactNode
  badge?: number
  children?: NavItem[]
}

// User/Auth types
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: string
}

// API Response types
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

