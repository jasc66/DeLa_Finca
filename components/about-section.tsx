'use client'

import { forwardRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AboutSectionProps {
  title: string
  content: string
  image: string
  imageAlt: string
  isActive: boolean
}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(({ title, content, image, imageAlt, isActive }, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div 
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `linear-gradient(rgba(230, 213, 195, 0.9), rgba(230, 213, 195, 0.9)), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          style={{ opacity, scale }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-800">{title}</h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">{content}</p>
          
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-sm">{imageAlt}</p>
            </div>
          </div>

          {/* Floating vegetable decorations */}
          <motion.div 
            className="absolute -right-20 -top-20 w-40 h-40"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37"
              alt="Decorative vegetable"
              width={160}
              height={160}
              className="object-contain"
              style={{
                filter: 'brightness(1.2) contrast(1.1)',
                mixBlendMode: 'multiply'
              }}
            />
          </motion.div>
          <motion.div 
            className="absolute -left-20 -bottom-20 w-40 h-40"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37"
              alt="Decorative vegetable"
              width={160}
              height={160}
              className="object-contain"
              style={{
                filter: 'brightness(1.2) contrast(1.1)',
                mixBlendMode: 'multiply'
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
})

AboutSection.displayName = 'AboutSection'

export default AboutSection

