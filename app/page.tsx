"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown } from 'lucide-react';
import { FloatingImage } from "@/components/floating-image";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Mission from "@/components/mission";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import { ImageCarousel } from "@/components/image-carousel";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mushroomRef = useRef<HTMLDivElement>(null);
  const [isMushroomVisible, setIsMushroomVisible] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrolled = window.scrollY;
      const images =
        containerRef.current.getElementsByClassName("floating-image");

      Array.from(images).forEach((image, index) => {
        const speed = 0.1 + index * 0.05;
        const yPos = -(scrolled * speed);
        const element = image as HTMLElement;
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });

      if (mushroomRef.current && containerRef.current) {
        const headerHeight = 80;
        const mushroomRect = mushroomRef.current.getBoundingClientRect();
        setIsMushroomVisible(mushroomRect.top > headerHeight);
      }

      const pageBottom = scrolled + window.innerHeight;
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const elementTop = section.offsetTop;
          const elementBottom = elementTop + section.offsetHeight;
          if (elementTop <= pageBottom && elementBottom >= scrolled) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden bg-[url('/img/fondo-gris.avif')]"
      ref={containerRef}
    >
      <Header />
      <Hero />

      <main className="relative">
        <div
          ref={mushroomRef}
          className={`transition-opacity duration-300 ${
            isMushroomVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <FloatingImage
            src="/png/img1_bg.png"
            alt="Floating Mushroom"
            className="absolute left-0 top-10 -translate-y-1/2 w-[100px] h-[200px] md:w-[200px] md:h-[400px] floating-image z-50"
            width={200}
            height={400}
          />
        </div>

        <section
          ref={(el: HTMLElement | null) => {
            sectionRefs.current[0] = el;
          }}
          className="relative min-h-screen pt-20 bg-cover bg-center bg-no-repeat px-4 md:px-8"
          style={{ backgroundImage: "url('/img/fondo-gris.avif')" }}
        >
          <div className="container mx-auto pt-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 lg:col-span-2 max-w-[90%] mx-auto animate-fade-in-up">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                  DE LA FINCA
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
                  En De La Finca, nos enorgullecemos de ofrecer una experiencia
                  culinaria única en Quepos, Costa Rica. Nuestra pasión es
                  combinar ingredientes frescos y locales con técnicas modernas,
                  creando platos que sorprenden el paladar. Desde deliciosas
                  hamburguesas de atún hasta tartar de atún y lomito con
                  gorgonzola, cada plato está preparado con dedicación. Nuestro
                  ambiente acogedor y la atención personalizada hacen que cada
                  visita sea especial. Ven y disfruta de sabores inolvidables,
                  guiados por la pasión de servir lo mejor. Descubre una
                  experiencia culinaria inolvidable, donde la pasión por los
                  ingredientes frescos y el ambiente acogedor se unen para crear
                  platos únicos en Quepos.
                </p>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-gray-800"
                >
                  ORDENA AHORA
                </Button>
              </div>
            </div>
            <FloatingImage
              src="/png/img1_bg.png"
              alt="Floating Mushroom"
              className="absolute right-0 top-90 -translate-y-1/2 w-[100px] h-[200px] md:w-[200px] md:h-[400px] floating-image z-100"
              width={200}
              height={400}
            />
          </div>

          <button
            onClick={() => {
              sectionRefs.current[1]?.scrollIntoView({ behavior: "smooth" });
            }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </section>

        <section
          ref={(el: HTMLElement | null) => {
            sectionRefs.current[1] = el;
          }}
          className="relative min-h-screen flex items-center py-20 px-4 md:px-8"
        >
          <div className="absolute left-0 right-0 md:right-[30%] top-1/2 -translate-y-1/2 h-[80vh] rounded-r-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <Image
              src="/fondo-comida.webp"
              alt="Farm to Table"
              fill
              className="object-cover mix-blend-overlay opacity-50"
            />
          </div>

          <div className="container relative z-10 max-w-6xl mx-auto">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-white hover:text-red-950">
                Nuestra Historia
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
                De La Finca nació de la pasión por la comida deliciosa y el
                compromiso con las prácticas sostenibles. Comenzamos pequeños
                pero soñamos en grande, con el objetivo de revolucionar la
                experiencia culinaria en Quepos con ingredientes frescos de
                origen local y recetas innovadoras.
              </p>
            </div>
          </div>

          <FloatingImage
            src="https://www.pngmart.com/files/1/Mushroom-PNG-File.png"
            alt="Floating Carrot"
            className="absolute top-1/2 right-[8%] w-[75px] h-[150px] md:w-[100px] md:h-[200px] lg:w-[200px] lg:h-[300px] floating-image z-20"
            width={200}
            height={300}
          />
        </section>

        <section
          ref={(el: HTMLElement | null) => {
            sectionRefs.current[3] = el;
          }}
          className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-8"
        >
          <div className="absolute inset-x-4 md:inset-x-12 lg:inset-x-24 top-1/2 -translate-y-1/2 h-[80vh] bg-[#91211e] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <Image
              src="/img/fondo-gris.avif"
              alt="Fresh Ingredients"
              fill
              className="object-cover mix-blend-overlay opacity-50"
            />
          </div>
          
          <div className="container relative z-10 max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Nuestra Comida
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
                Desde ensaladas frescas hasta platos principales elaborados,
                cada platillo en De La Finca está preparado con cuidado utilizando
                los mejores ingredientes. Priorizamos los productos locales y orgánicos,
                y creamos combinaciones de sabores que emocionan el paladar mientras
                nutren el cuerpo.
              </p>
            </div>
            <ImageCarousel />
          </div>

          <FloatingImage
            src="/png/img4_bg.png"
            alt="Floating Pepper"
            className="absolute top-1/3 -right-10 w-[100px] h-[100px] md:w-[185px] md:h-[185px] lg:w-[350px] lg:h-[350px] floating-image z-40"
            width={350}
            height={350}
          />
        </section>
      </main>

      <Mission />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

