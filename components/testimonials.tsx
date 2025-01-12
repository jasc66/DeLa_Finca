'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    tmary: {
      (action: string, widgetId: string): void;
      q?: any[];
    };
  }
}

export default function Testimonials() {
  const trustmaryContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Verifica si el contenedor está disponible
    if (trustmaryContainerRef.current) {
      trustmaryContainerRef.current.innerHTML = '' // Limpia el contenedor

      // Crea un marcador para el widget
      const widgetPlaceholder = document.createElement('div')
      widgetPlaceholder.id = 'trustmary-widget'
      trustmaryContainerRef.current.appendChild(widgetPlaceholder)

      // Función para inicializar el widget
      const initTrustmary = () => {
        try {
          if (!window.tmary) {
            window.tmary = function (...args: any[]) {
              (window.tmary.q = window.tmary.q || []).push(args)
            }
          }
          window.tmary('app', 'KoVx7GQHD') // ID del widget
        } catch (error) {
          console.warn("Error al inicializar Trustmary:", error)
        }
      }

      // Crea el script para cargar el widget
      const script = document.createElement('script')
      script.src = "https://widget.trustmary.com/KoVx7GQHD"
      script.async = true

      // Maneja la carga del script
      script.onload = () => {
        if (trustmaryContainerRef.current) {
          try {
            initTrustmary()
          } catch (error) {
            console.warn("Error en script.onload:", error)
          }
        }
      }

      // Maneja errores globales relacionados con el script
      const originalError = console.error
      console.error = (...args) => {
        const errorMessage = args[0]?.toString() || ''
        if (
          errorMessage.includes("TypeError") &&
          errorMessage.includes("parentElement")
        ) {
          console.log("Error atrapado y manejado de Trustmary:", errorMessage)
          return
        }
        originalError.apply(console, args)
      }

      // Añade el script al contenedor
      trustmaryContainerRef.current.appendChild(script)

      // Limpieza del componente
      return () => {
        if (trustmaryContainerRef.current) {
          while (trustmaryContainerRef.current.firstChild) {
            trustmaryContainerRef.current.removeChild(trustmaryContainerRef.current.firstChild)
          }
        }
        window.removeEventListener('load', initTrustmary)
        console.error = originalError // Restaura console.error
      }
    }
  }, [])

  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/fondo-comida.webp')",
          filter: "brightness(0.7)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10 bg-[#91211e]">
        <h2 className="text-4xl font-bold text-center mb-12 text-white ">Lo que dicen nuestros clientes</h2>
        <div className="max-w-5xl mx-auto">
          <div ref={trustmaryContainerRef} className="trustmary-container" />
        </div>
      </div>
    </section>
  )
}

