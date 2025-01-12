'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { FloatingImage } from '@/components/floating-image'
import ContactForm from '@/components/contact-form'
import Image from 'next/image'
import { ToastProvider } from '@/contexts/ToastContext'
import { Toast } from '@/components/Toast'
import { ChevronDown } from 'lucide-react'

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col" ref={containerRef}>
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('/header_nosotros.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          
          <div className="relative z-20 text-center space-y-6 max-w-4xl px-4">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white leading-tight drop-shadow-lg">
              CONECTÉMONOS
            </h1>
            <div className="space-y-2">
              <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow">
                COME REAL. SÉ REAL.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow">
                DE LA FINCA
              </p>
            </div>
          </div>

          {/* Decorative Images */}
          <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 z-20">
            <Image
              src="/png/img4_bg.png"
              alt="Decorative"
              fill
              className="object-contain"
            />
          </div>

          {/* Scroll Button */}
          <button 
            onClick={scrollToContent}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-30"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </section>

        {/* Content Section */}
        <main className="flex-grow relative" ref={contentRef}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/img/fondo-comida.webp')",
              backgroundAttachment: "fixed",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <section className="relative py-16 sm:py-20 px-4 z-10">
            <div className="container mx-auto max-w-6xl bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                {/* Map Section */}
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-[#91211e]">Ubicación</h2>
                  <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.9733343610465!2d-84.163516!3d9.433404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa173be36130a53%3A0x7002ad61f5b74e09!2sDe%20La%20Finca!5e0!3m2!1ses-ES!2scr!4v1695410915889!5m2!1ses-ES!2scr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-800">De La Finca</p>
                    <p className="text-lg text-gray-800">Quepos, Puntarenas, Costa Rica</p>
                  </div>
                </div>

                {/* Contact Form Section */}
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-[#91211e]">Contáctanos</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>

          {/* Floating Images */}
          <FloatingImage
            src="/png/img1_bg.png"
            alt="Floating Mushroom"
            className={`absolute ${
              isMobile 
                ? 'left-0 top-0 w-16 h-16' 
                : 'left-0 top-0 w-32 h-32 lg:w-40 lg:h-40'
            } floating-image z-20 opacity-50 pointer-events-none`}
            width={isMobile ? 64 : 160}
            height={isMobile ? 64 : 160}
          />

          <FloatingImage
            src="/png/img4_bg.png"
            alt="Floating Leaf"
            className={`absolute ${
              isMobile 
                ? 'right-0 bottom-0 w-16 h-16' 
                : 'right-0 bottom-0 w-32 h-32 lg:w-40 lg:h-40'
            } floating-image z-20 opacity-50 pointer-events-none`}
            width={isMobile ? 64 : 160}
            height={isMobile ? 64 : 160}
          />
        </main>

        <Footer />
        <Toast />
      </div>
    </ToastProvider>
  )
}

