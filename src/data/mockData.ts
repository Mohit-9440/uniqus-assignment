import { Sale } from '@/components/dashboard/LatestSalesTable'
import { StatusType } from '@/components/dashboard/StatusBadge'

/**
 * Mock data service
 */

const products = [
  'Macbook Pro',
  'Dell Laptop',
  'Macbook Air',
  'Macbook',
  'LG Laptop',
  'HP Laptop',
  'Lenovo ThinkPad',
  'ASUS ROG',
  'Surface Pro',
  'iPad Pro',
  'iPhone 15',
  'Samsung Galaxy',
  'Google Pixel',
  'OnePlus',
  'Xiaomi',
]

const firstNames = [
  'Rodney', 'Mike', 'Louis', 'Dominic', 'Adrian', 'Walter', 'Victor',
  'John', 'Michael', 'David', 'James', 'Robert', 'William', 'Richard',
  'Thomas', 'Charles', 'Daniel', 'Matthew', 'Anthony', 'Mark',
]

const lastNames = [
  'Cannon', 'Franklin', 'Love', 'Drake', 'Quinn', 'Roberson',
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia',
  'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez',
  'Wilson', 'Anderson',
]

const countries = [
  'United Kingdom', 'United States', 'Germany', 'Spain', 'France',
  'Italy', 'Canada', 'Australia', 'Japan', 'Netherlands',
]

const statuses: StatusType[] = ['shipped', 'processing', 'cancelled']

const cities = [
  'London', 'New York', 'Berlin', 'Madrid', 'Paris',
  'Rome', 'Toronto', 'Sydney', 'Tokyo', 'Amsterdam',
]

function generateSale(id: number): Sale {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
  const product = products[Math.floor(Math.random() * products.length)]
  const country = countries[Math.floor(Math.random() * countries.length)]
  const city = cities[Math.floor(Math.random() * cities.length)]
  const status = statuses[Math.floor(Math.random() * statuses.length)]
  
  const subtotal = Math.floor(Math.random() * 1000) + 50
  const shipping = Math.floor(Math.random() * 50) + 10
  const total = subtotal + shipping

  return {
    id: `sale-${id}`,
    product: {
      name: product,
      id: `10-3290-${String(id).padStart(2, '0')}`,
    },
    customer: {
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`,
    },
    delivery: {
      country,
      address: `${Math.floor(Math.random() * 999) + 1} ${city} St, ${city}`,
    },
    status,
    subtotal: `$${subtotal.toFixed(2)}`,
    shipping: `$${shipping.toFixed(2)}`,
    total: `$${total.toFixed(2)}`,
  }
}

export function generateAllSales(): Sale[] {
  const sales: Sale[] = []
  for (let i = 1; i <= 50; i++) {
    sales.push(generateSale(i))
  }
  return sales
}

export function getPaginatedSales(page: number, itemsPerPage: number = 7): Sale[] {
  const allSales = generateAllSales()
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return allSales.slice(startIndex, endIndex)
}

export function getTotalPages(itemsPerPage: number = 7): number {
  return Math.ceil(50 / itemsPerPage)
}

