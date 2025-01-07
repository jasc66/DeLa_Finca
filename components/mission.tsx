import Image from "next/image";
import { useRef } from "react";
import { FloatingImage } from "@/components/floating-image";

export default function Mission() {
  
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  return (
    <section
    ref={(el: HTMLElement | null) => {
      sectionRefs.current[2] = el;
    }}
    className="relative min-h-screen flex items-center justify-end py-20"
  >
    <div className="absolute left-[20%] right-0 top-1/2 -translate-y-1/2 h-[80vh] bg-[#e6d5c3] rounded-l-lg overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <Image
        src="/img/comida2.jpg"
        alt="Sustainable Practices"
        fill
        className="mix-blend-overlay opacity-50"
      />
    </div>
    
    <div className="container relative z-10 max-w-6xl mx-auto px-8">
      <div className="max-w-xl ml-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
          Nuestra Misión
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
          En De La Finca, nuestra misión es hacer que la comida de calidad
          sea accesible, agradable y sostenible. Creemos en el poder de la
          buena comida para nutrir tanto el cuerpo como el planeta, y estamos
          comprometidos a servir platos que sean tan buenos para ti como lo
          son para el medio ambiente.
        </p>
      </div>
    </div>

    <FloatingImage
      src="https://www.pngmart.com/files/1/Mushroom-PNG-File.png"
      alt="Floating Lettuce"
      className="absolute top-1/2 left-[2%] w-[200px] h-[200px] md:w-[300px] md:h-[400px] floating-image z-30"
      width={200}
      height={300}
    />
  </section>
  )
}

