'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from '@/data/menu-items'

interface MenuSectionProps {
  title: string
  items: MenuItem[]
  isActive: boolean
}

const MenuSection = forwardRef<HTMLElement, MenuSectionProps>(({ title, items, isActive }, ref) => {
  return (
    <section
      ref={ref}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">{title}</h2>
          
          <div className="space-y-8">
            {items.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <span className="font-bold text-gray-800 whitespace-nowrap">₡{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
                <p className="mt-2 text-gray-600">{item.description.es}</p>
                <p className="mt-1 text-gray-500 text-sm">{item.description.en}</p>
                {item.description.fr && <p className="mt-1 text-gray-500 text-sm italic">{item.description.fr}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
})

MenuSection.displayName = 'MenuSection'

export default MenuSection

