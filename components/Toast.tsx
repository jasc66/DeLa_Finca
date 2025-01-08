'use client'

import React, { useEffect } from 'react'
import { useToast } from '@/contexts/ToastContext'

export const Toast: React.FC = () => {
  const { toast, hideToast } = useToast()

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        hideToast()
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [toast, hideToast])

  if (!toast) return null

  const bgColor = toast.type === 'success' ? 'bg-green-500' : toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'

  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white p-4 rounded-md shadow-lg z-50`}>
      {toast.message}
    </div>
  )
}

