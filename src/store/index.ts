import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface AppState {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  toggleSidebar: () => void
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  user: any | null
  setUser: (user: any) => void
}

export const useAppStore = create<AppState>()(
  devtools(
    (set) => ({
      sidebarOpen: true,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      user: null,
      setUser: (user) => set({ user }),
    }),
    { name: 'AppStore' }
  )
)

interface DashboardState {
  selectedDateRange: string
  setSelectedDateRange: (range: string) => void
  filters: Record<string, any>
  setFilter: (key: string, value: any) => void
  clearFilters: () => void
}

export const useDashboardStore = create<DashboardState>()(
  devtools(
    (set) => ({
      selectedDateRange: '7d',
      setSelectedDateRange: (range) => set({ selectedDateRange: range }),
      
      filters: {},
      setFilter: (key, value) =>
        set((state) => ({
          filters: { ...state.filters, [key]: value },
        })),
      clearFilters: () => set({ filters: {} }),
    }),
    { name: 'DashboardStore' }
  )
)

