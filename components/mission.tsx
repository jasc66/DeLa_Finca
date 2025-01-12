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
      className="relative min-h-screen flex items-center justify-end py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute left-0 sm:left-[10%] md:left-[20%] right-0 top-1/2 -translate-y-1/2 h-[80vh] bg-[#292929] rounded-l-lg overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <Image
          src="/img/comida8.jpg"
          alt="Sustainable Practices"
          fill
          className="object-cover mix-blend-overlay opacity-50"
        />
      </div>
      
      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="max-w-xl ml-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Nuestra Misión
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
            En De La Finca, nuestra misión es hacer que la comida de calidad
            sea accesible, agradable y sostenible. Creemos en el poder de la
            buena comida para nutrir tanto el cuerpo como el planeta, y estamos
            comprometidos a servir platos que sean tan buenos para ti como lo
            son para el medio ambiente.
          </p>
        </div>
      </div>

      <FloatingImage
        src="/png/img16_bg.png"
        alt="Floating Mushroom"
        className="absolute hidden md:block top-1/2 left-0 sm:left-[2%] w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] floating-image z-30"
        width={300}
        height={300}
      />
      <FloatingImage
        src="/png/img17_bg.png"
        alt="Floating Mushroom"
        className="absolute md:hidden -bottom-20 right-0 w-[100px] h-[100px] floating-image z-30"
        width={100}
        height={100}
      />
    </section>
  );
}

