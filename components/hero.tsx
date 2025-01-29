import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/De_La Finca_simple.mp4" type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>
      
      {/* Capa de oscurecimiento */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
      
      {/* Contenido */}
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
  );
}
