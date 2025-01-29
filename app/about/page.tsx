'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import AboutSection from '@/components/about-section'
import { FloatingImage } from '@/components/floating-image'

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="relative min-h-screen flex items-center"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/De_La Finca_simple1.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="container mx-auto px-4 pt-20 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="space-y-6 text-center lg:text-left bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg w-full lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#91211e] tracking-tight">
                CONOCE MÁS
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#91211e] tracking-tight">
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
           
          </div>
        </div>

        <FloatingImage
          src="/png/img2_bg.png"
          alt="Floating Leaf"
          className="absolute hidden md:block bottom-2/4 right-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] floating-image z-10"
          width={200}
          height={200}
        />

        <button 
          onClick={() => {
            sectionRefs.current[1]?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#91211e] animate-bounce bg-white/80 rounded-full p-2"
        >
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
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
    image: "/img/interior.jpeg",
    imageAlt: "Interior del restaurante De La Finca"
  },
  {
    title: "Nuestra Misión",
    content: "En De La Finca, nuestra misión es hacer que la comida de calidad sea accesible, agradable y sostenible. Creemos en el poder de la buena comida para nutrir tanto el cuerpo como el alma, y estamos comprometidos a servir platos que sean tan buenos para ti como lo son para el medio ambiente.",
    image: "/img/comida7.jpg",
    imageAlt: "Platos de De La Finca"
  },
  {
    title: "Nuestros Valores",
    content: "La sostenibilidad y la calidad son fundamentales en todo lo que hacemos. Trabajamos directamente con productores locales, minimizamos nuestro impacto ambiental y creamos relaciones duraderas con nuestra comunidad para ofrecer la mejor experiencia gastronómica posible.",
    image: "/img/comida3.jpg",
    imageAlt: "Ingredientes frescos de De La Finca"
  }
]

