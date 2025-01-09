import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Fondo de la imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/header_de_la_finca.jpg')`
        }}
      />
      
      {/* Contenido principal */}
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
        De la Finca a tu mesa:<br />
        Sabores auténticos, frescura inigualable.
        </h1>
        <Link href="/menu">
          <Button size="lg" variant="outline" className="text-black border-white hover:bg-black hover:text-white">
            Revisa el menú
          </Button>
        </Link>
      </div>

      {/* Botones de navegación */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white">
        <ChevronLeft className="h-12 w-12" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white">
        <ChevronRight className="h-12 w-12" />
      </button>
    </section>
  )
}
