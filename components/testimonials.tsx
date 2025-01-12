'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <Card>
          <CardContent>
            <div ref={trustmaryContainerRef} className="trustmary-container" />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
