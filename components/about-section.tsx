'use client'

import { forwardRef, useRef, useImperativeHandle } from 'react'
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
  const sectionRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => sectionRef.current as HTMLElement)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.section
      ref={sectionRef}
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
          className="max-w-6xl mx-auto relative"
          style={{ opacity, scale }}
        >
          {/* Main content container with margin to prevent overlap */}
          <div className="relative z-10 mx-35 md:mx-42">
            {/* Top right decorative element */}
            <div className="absolute -right-40 md:-right-48 -top-12 w-32 h-32 md:w-48 md:h-48 z-0">
              <Image
                src="/png/img2_bg.png"
                alt="Decorative element"
                width={192}
                height={192}
                className="object-contain"
                style={{
                  filter: 'brightness(1.2) contrast(1.1)',
                  mixBlendMode: 'multiply',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>

            {/* Bottom left decorative element */}
            <div className="absolute -left-40 md:-left-48 bottom-32 w-32 h-32 md:w-48 md:h-48 z-0">
              <Image
                src="/png/img1_bg.png"
                alt="Decorative element"
                width={192}
                height={192}
                className="object-contain"
                style={{
                  filter: 'brightness(1.2) contrast(1.1)',
                  mixBlendMode: 'multiply',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-800">{title}</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">{content}</p>
              
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl mt-16">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm">{imageAlt}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
})

AboutSection.displayName = 'AboutSection'

export default AboutSection

