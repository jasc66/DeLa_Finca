'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import AboutSection from '@/components/about-section'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const scale = useTransform(scrollY, [0, 200], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      const pageTop = window.scrollY
      const pageBottom = pageTop + window.innerHeight
      const sections = sectionRefs.current

      sections.forEach((section, index) => {
        if (section) {
          const elementTop = section.offsetTop
          const elementBottom = elementTop + section.offsetHeight

          if (elementTop <= pageBottom && elementBottom >= pageTop) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#e6d5c3]">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={(el: HTMLElement | null) => { if (el) sectionRefs.current[0] = el }}
        className="relative min-h-screen pt-20"
      >
        <div className="container mx-auto px-4 pt-20">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 items-center"
            style={{ opacity, scale }}
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 tracking-tight">
                ABOUT GREEN REBEL
              </h1>
              <div className="space-y-2">
                <p className="text-2xl text-gray-700">REAL SERVICE.</p>
                <p className="text-2xl text-gray-700">REAL PEOPLE.</p>
                <p className="text-2xl text-gray-700">REAL CONNECTIONS.</p>
              </div>
              <Button 
                variant="outline" 
                className="bg-transparent border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
              >
                ORDER CATERING ONLINE
              </Button>
            </div>
            
            <div className="relative flex justify-end">
              <div className="relative w-[500px] h-[700px]">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                  alt="Fresh Ingredients"
                  fill
                  className="object-contain brightness-125 contrast-125"
                  style={{
                    filter: 'brightness(1.2) contrast(1.1)',
                    mixBlendMode: 'multiply'
                  }}
                />
                {/* Light effect overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                    mixBlendMode: 'overlay'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

        <motion.button 
          onClick={() => {
            sectionRefs.current[1]?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-800 animate-bounce"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.button>
      </section>

      {/* About Sections */}
      {aboutSections.map((section, index) => (
        <AboutSection
          key={section.title}
          ref={(el: HTMLElement | null) => { if (el) sectionRefs.current[index + 1] = el }}
          {...section}
          isActive={activeSection === index + 1}
        />
      ))}

      <Footer />
    </div>
  )
}

const aboutSections = [
  {
    title: "Our Story",
    content: "Green Rebel was born from a simple idea: healthy food should be delicious, accessible, and sustainable. We started in a small kitchen with big dreams, committed to bringing fresh, wholesome meals to our community.",
    image: "https://images.unsplash.com/photo-1557844352-761f2565b576",
    imageAlt: "Fresh vegetables on wooden table"
  },
  {
    title: "Our Mission",
    content: "We're on a mission to revolutionize the way people think about healthy eating. By sourcing the freshest ingredients and creating innovative dishes, we prove that nutritious food can be exciting and satisfying.",
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1",
    imageAlt: "Chef preparing fresh ingredients"
  },
  {
    title: "Our Values",
    content: "Sustainability isn't just a buzzword for us—it's a way of life. We work directly with local farmers, minimize our environmental impact, and create lasting relationships with our community.",
    image: "https://images.unsplash.com/photo-1595855759920-86582396756c",
    imageAlt: "Organic farming"
  }
]

