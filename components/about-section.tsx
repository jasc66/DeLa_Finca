'use client'

import { forwardRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { FloatingImage } from '@/components/floating-image'

interface AboutSectionProps {
  title: string
  content: string
  image: string
  imageAlt: string
  isActive: boolean
}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(({ title, content, image, imageAlt, isActive }, ref) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 700)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section
      ref={ref}
      className={`relative min-h-screen flex items-center py-20 bg-[#e6d5c3] transition-opacity duration-500 ${
        isActive ? 'opacity-100' : 'opacity-50'
      }`}
      style={{
        backgroundImage: "url('/fondo-comida.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto relative">
          <div className="bg-white/90 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#91211e] mb-6">{title}</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mb-8">{content}</p>
            
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-2xl">
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

          <FloatingImage
            src="/png/img4_bg.png"
            alt="Decorative element"
            className={`absolute ${
              isMobile 
                ? 'right-0 top-0 w-16 h-16' 
                : '-right-20 -top-12 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40'
            } floating-image`}
            width={isMobile ? 64 : 160}
            height={isMobile ? 64 : 160}
          />

          <FloatingImage
            src="/png/img3_bg.png"
            alt="Decorative element"
            className={`absolute ${
              isMobile 
                ? 'left-0 bottom-0 w-16 h-16' 
                : '-left-40 -bottom-4 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40'
            } floating-image`}
            width={isMobile ? 64 : 160}
            height={isMobile ? 64 : 160}
          />
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = 'AboutSection'

export default AboutSection

