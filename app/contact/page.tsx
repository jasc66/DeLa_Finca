'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { FloatingImage } from '@/components/floating-image'
import ContactForm from '@/components/contact-form'
import Image from 'next/image'
import { ToastProvider } from '@/contexts/ToastContext'
import { Toast } from '@/components/Toast'

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 700)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#e6d5c3]" ref={containerRef}>
        <Header />
        
        <main className="pt-20">
          <section className="relative min-h-screen flex items-center py-20 px-4">
            <div className="absolute inset-0 z-0">
              <Image
                src="/img/fondo-gris.avif"
                alt="Background"
                fill
                className="object-cover"
                style={{
                  filter: "brightness(0.7)",
                }}
              />
            </div>

            <div className="container mx-auto relative z-10">
              <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#91211e] mb-6">Contáctanos</h1>
                <p className="text-lg text-gray-700 mb-8">
                  ¿Listo para disfrutar de una experiencia culinaria única? Haz tu reserva ahora y déjanos sorprenderte con nuestros deliciosos platillos.
                </p>
                <ContactForm />
              </div>
            </div>

            <FloatingImage
              src="/png/img1_bg.png"
              alt="Floating Mushroom"
              className={`absolute ${
                isMobile 
                  ? 'left-0 top-20 w-20 h-20' 
                  : 'left-10 top-40 w-40 h-40'
              } floating-image z-20`}
              width={isMobile ? 80 : 160}
              height={isMobile ? 80 : 160}
            />

            <FloatingImage
              src="/png/img4_bg.png"
              alt="Floating Leaf"
              className={`absolute ${
                isMobile 
                  ? 'right-0 bottom-20 w-20 h-20' 
                  : 'right-10 bottom-40 w-40 h-40'
              } floating-image z-20`}
              width={isMobile ? 80 : 160}
              height={isMobile ? 80 : 160}
            />
          </section>
        </main>

        <Footer />
        <Toast />
      </div>
    </ToastProvider>
  )
}

