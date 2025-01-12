'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

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
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadTrustmary = () => {
    setIsLoading(true)
    setError(null)

    if (trustmaryContainerRef.current) {
      trustmaryContainerRef.current.innerHTML = '' // Clear the container

      const widgetPlaceholder = document.createElement('div')
      widgetPlaceholder.id = 'trustmary-widget'
      trustmaryContainerRef.current.appendChild(widgetPlaceholder)

      const initTrustmary = () => {
        try {
          if (!window.tmary) {
            window.tmary = function (...args: any[]) {
              (window.tmary.q = window.tmary.q || []).push(args)
            }
          }
          window.tmary('app', 'KoVx7GQHD')
        } catch (error) {
          console.warn("Error initializing Trustmary:", error)
          setError("Failed to initialize Trustmary widget")
        } finally {
          setIsLoading(false)
        }
      }

      const script = document.createElement('script')
      script.src = "https://widget.trustmary.com/KoVx7GQHD"
      script.async = true

      script.onload = () => {
        if (document.readyState === 'complete') {
          initTrustmary()
        } else {
          window.addEventListener('load', initTrustmary)
        }
      }

      script.onerror = () => {
        console.error("Failed to load Trustmary script")
        setError("Failed to load Trustmary widget")
        setIsLoading(false)
      }

      // Handle global errors related to the script
      const originalError = console.error
      console.error = (...args) => {
        const errorMessage = args[0]?.toString() || ''
        if (
          errorMessage.includes("TypeError") &&
          errorMessage.includes("parentElement")
        ) {
          console.log("Caught and handled Trustmary error:", errorMessage)
          setError("An error occurred while loading testimonials")
          setIsLoading(false)
          return
        }
        originalError.apply(console, args)
      }

      document.head.appendChild(script)

      return () => {
        if (trustmaryContainerRef.current) {
          trustmaryContainerRef.current.innerHTML = ''
        }
        window.removeEventListener('load', initTrustmary)
        console.error = originalError // Restore console.error
      }
    }
  }

  useEffect(() => {
    const cleanup = loadTrustmary()
    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <Card>
          <CardContent className="min-h-[300px] flex items-center justify-center">
            {isLoading ? (
              <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
                <p>Cargando testimonios...</p>
              </div>
            ) : error ? (
              <div className="text-center">
                <p className="text-red-500 mb-4">{error}</p>
                <Button onClick={loadTrustmary}>Intentar de nuevo</Button>
              </div>
            ) : (
              <div ref={trustmaryContainerRef} className="trustmary-container w-full" />
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

