'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '@/data/menu-items';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  isActive: boolean;
}

const MenuSection = forwardRef<HTMLElement, MenuSectionProps>(({ title, items, isActive }, ref) => {
  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 relative" // Se asegura que tenga 'relative'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-4xl bg-white/90 backdrop-blur-md rounded-lg p-8 shadow-xl relative" // Asegura 'relative'
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800">{title}</h2>
        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{item.name}</h3>
                <span className="text-lg font-bold text-gray-800">₡{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
              </div>
              <p className="mt-2 text-gray-600">{item.description.es}</p>
              <p className="mt-1 text-gray-500 text-sm">{item.description.en}</p>
              {item.description.fr && <p className="mt-1 text-gray-500 text-sm italic">{item.description.fr}</p>}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
});

MenuSection.displayName = 'MenuSection';

export default MenuSection;
