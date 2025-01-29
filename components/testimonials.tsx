'use client'

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    tmary?: {
      (action: string, widgetId: string): void
      q?: any[]
    }
  }
}

export default function Testimonials() {
  const trustmaryContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!trustmaryContainerRef.current) return

    const initTrustmary = () => {
      try {
        if (typeof window.tmary === "undefined") {
          window.tmary = (...args: any[]) => {
            ;(window.tmary!.q = window.tmary!.q || []).push(args)
          }
        }

        if (window.tmary) {
          window.tmary("app", "KoVx7GQHD")
        } else {
          console.warn("Trustmary no está definido en window")
        }
      } catch (error) {
        console.warn("Error al inicializar Trustmary:", error)
      }
    }

    const loadScript = () => {
      if (document.getElementById("trustmary-script")) {
        return setTimeout(initTrustmary, 500)
      }

      const script = document.createElement("script")
      script.id = "trustmary-script"
      script.src = "https://widget.trustmary.com/KoVx7GQHD"
      script.async = true

      script.onload = () => {
        setTimeout(initTrustmary, 500)
      }

      script.onerror = () => {
        console.error("Error al cargar el script de Trustmary.")
      }

      document.body.appendChild(script)
    }

    loadScript()

    return () => {
      delete window.tmary
    }
  }, [])

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Lo que dicen nuestros clientes
        </h2>
        <div
          ref={trustmaryContainerRef}
          id="trustmary-widget"
          className="bg-white rounded-lg shadow-lg p-6"
          style={{ minHeight: "300px", overflow: "hidden" }}
        />
      </div>
    </section>
  )
}
