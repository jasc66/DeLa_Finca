import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

const backgroundImages = [
  '/header_de_la_finca.jpg',
  '/header_nosotros.jpg' // Asegúrate de que esta imagen exista en tu proyecto
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? 1 : 0
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8 bg-black/50 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
            <span className="block mb-4">De la Finca a tu mesa:</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80">
              Sabores auténticos, frescura inigualable.
            </span>
          </h1>
          <div className="pt-4">
            <Link href="/menu">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-black border-2 border-black bg-white/90 hover:bg-black hover:text-white transition-all duration-300 text-lg px-8 py-6"
              >
                Revisa el menú
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

