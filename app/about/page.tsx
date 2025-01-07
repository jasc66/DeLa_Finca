'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import AboutSection from '@/components/about-section'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

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
    <div className="min-h-screen bg-[#e6d5c3]" ref={containerRef}>
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={(el: HTMLElement | null) => { if (el) sectionRefs.current[0] = el }}
        className="relative min-h-screen pt-20"
        style={{
          backgroundImage: "url('/img/cartonFondo.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 pt-20">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 items-center"
            style={{ opacity, scale }}
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-[#91211e] tracking-tight">
                CONOCE MÁS
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-[#91211e] tracking-tight">
                SOBRE NOSOTROS
              </h2>
              <div className="relative w-32 h-32 mx-auto lg:mx-0">
                <Image
                  src="/LogoDeLaFinca.png"
                  alt="De La Finca Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="relative flex justify-end">
              <div className="relative w-[500px] h-[700px]">
                <Image
                  src="/img/comida7.jpg"
                  alt="De La Finca Restaurant"
                  fill
                  className="object-cover rounded-lg"
                  style={{
                    filter: 'brightness(1.2) contrast(1.1)',
                    mixBlendMode: 'multiply'
                  }}
                />
                {/* Light effect overlay */}
                <div 
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                    mixBlendMode: 'overlay'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button 
          onClick={() => {
            sectionRefs.current[1]?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#91211e] animate-bounce"
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
    title: "Nuestra Historia",
    content: "Ubicado en el corazón de Quepos, Puntarenas, De La Finca es un restaurante que ofrece una experiencia culinaria única, en donde la frescura de los ingredientes y la dedicación por la gastronomía costarricense se unen para deleitar a los paladares más exigentes.",
    image: "/img/comida2.jpg",
    imageAlt: "Interior del restaurante De La Finca"
  },
  {
    title: "Nuestra Misión",
    content: "En De La Finca, nuestra misión es hacer que la comida de calidad sea accesible, agradable y sostenible. Creemos en el poder de la buena comida para nutrir tanto el cuerpo como el alma, y estamos comprometidos a servir platos que sean tan buenos para ti como lo son para el medio ambiente.",
    image: "/img/comida1.jpg",
    imageAlt: "Platos de De La Finca"
  },
  {
    title: "Nuestros Valores",
    content: "La sostenibilidad y la calidad son fundamentales en todo lo que hacemos. Trabajamos directamente con productores locales, minimizamos nuestro impacto ambiental y creamos relaciones duraderas con nuestra comunidad para ofrecer la mejor experiencia gastronómica posible.",
    image: "/img/comida3.jpg",
    imageAlt: "Ingredientes frescos de De La Finca"
  }
]

