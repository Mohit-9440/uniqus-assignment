import React from 'react'
import { cn } from '@/utils/cn'
import { User } from 'lucide-react'

export interface Message {
  id: string
  sender: string
  message: string
  time: string
  avatar?: string
}

export interface MessagesProps {
  messages: Message[]
  className?: string
}

/**
 * Messages component
 */
export const Messages: React.FC<MessagesProps> = ({ messages, className }) => {
  return (
    <div className={cn('bg-white rounded-lg p-4 shadow-sm border border-gray-100', className)}>
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Messages</h2>
      <div className="space-y-3">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
              {message.avatar ? (
                <img src={message.avatar} alt={message.sender} className="w-full h-full rounded-full object-cover" />
              ) : (
                <User className="w-5 h-5 text-gray-500" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold text-gray-800">{message.sender}</p>
                <p className="text-xs text-gray-500">{message.time}</p>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

