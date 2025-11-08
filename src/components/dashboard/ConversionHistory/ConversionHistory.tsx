import React from 'react'
import { cn } from '@/utils/cn'
import { Clock } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export interface ConversionHistoryProps {
  className?: string
}

/**
 * ConversionHistory component
 */
export const ConversionHistory: React.FC<ConversionHistoryProps> = ({ className }) => {
  const data = [
    { week: 'W1', value: 400, value2: 300 },
    { week: 'W2', value: 300, value2: 200 },
    { week: 'W3', value: 500, value2: 400 },
    { week: 'W4', value: 450, value2: 350 },
    { week: 'W5', value: 600, value2: 500 },
    { week: 'W6', value: 550, value2: 450 },
    { week: 'W7', value: 700, value2: 600 },
    { week: 'W8', value: 650, value2: 550 },
  ]

  return (
    <div className={cn('bg-white rounded-lg p-4 shadow-sm border border-gray-100', className)}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-800">Conversion history</h2>
        <Clock className="w-5 h-5 text-gray-500" />
      </div>
      <p className="text-sm text-gray-500 mb-3">Week to week performance</p>
      {/* Chart area */}
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9333EA" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#9333EA" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="week" 
              tick={{ fontSize: 12, fill: '#6B7280' }}
              axisLine={{ stroke: '#E5E7EB' }}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#6B7280' }}
              axisLine={{ stroke: '#E5E7EB' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '6px',
                fontSize: '12px'
              }}
            />
            <Area
              type="monotone"
              dataKey="value2"
              stroke="#3B82F6"
              fillOpacity={1}
              fill="url(#colorValue2)"
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#9333EA"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

