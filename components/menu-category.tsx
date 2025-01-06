'use client'

import { forwardRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
}

interface MenuCategory {
  name: string
  image: string
  items: MenuItem[]
}

interface MenuCategoryProps {
  category: MenuCategory
  isActive: boolean
}

const MenuCategory = forwardRef<HTMLElement, MenuCategoryProps>(({ category, isActive }, ref) => {
  return (
    <section
      ref={ref}
      className="py-20 min-h-screen relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div 
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `url(${category.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
            {category.name}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {category.items.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.9 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="text-lg font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
})

MenuCategory.displayName = 'MenuCategory'

export default MenuCategory

