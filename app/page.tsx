"use client";

import { useEffect, useRef, useState, forwardRef } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
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

      // Check mushroom visibility
      if (mushroomRef.current && containerRef.current) {
        const headerHeight = 80; // Adjust this value based on your actual header height
        const mushroomRect = mushroomRef.current.getBoundingClientRect();
        setIsMushroomVisible(mushroomRect.top > headerHeight);
      }

      // Update active section
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
      <div className="min-h-screen relative overflow-hidden" ref={containerRef}>
        {/* Floating Images */}
        <FloatingImage
          src="https://www.pngmart.com/files/15/Fresh-Organic-Tomato-PNG.png"
          alt="Floating Tomato"
          className="absolute top-[10%] -right-20 w-[300px] h-[300px] floating-image z-10"
          width={300}
          height={300}
        />
        <FloatingImage
          src="https://www.pngmart.com/files/15/Organic-Carrot-PNG.png"
          alt="Floating Carrot"
          className="absolute top-[30%] -left-20 w-[200px] h-[400px] floating-image z-20"
          width={200}
          height={400}
        />
        <FloatingImage
          src="https://www.pngmart.com/files/1/Green-Lettuce-PNG.png"
          alt="Floating Lettuce"
          className="absolute top-[50%] -right-40 w-[400px] h-[400px] floating-image z-30"
          width={400}
          height={400}
        />
        <FloatingImage
          src="https://www.pngmart.com/files/15/Bell-Pepper-PNG-Pic.png"
          alt="Floating Pepper"
          className="absolute top-[70%] -left-20 w-[250px] h-[250px] floating-image z-40"
          width={250}
          height={250}
        />
        {/* <FloatingImage
        src="https://www.pngmart.com/files/1/Mushroom-PNG-File.png"
        alt="Floating Mushroom"
        className="absolute top-[90%] right-0 w-[200px] h-[200px] floating-image z-50"
        width={200}
        height={200}
      /> */}

        <Header />

        <Hero />
        <div className="relative">
          <div
            ref={mushroomRef}
            className={`transition-opacity duration-300 ${
              isMushroomVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <FloatingImage
              src="/png/img1_bg.png"
              alt="Floating Mushroom"
              className="absolute left-0 top-10 -translate-y-1/2 w-[200px] h-[400px] floating-image z-50"
              width={300}
              height={400}
            />
          </div>
        </div>
        <section
          ref={(el: HTMLElement | null) => {
            sectionRefs.current[0] = el;
          }}
          className="relative min-h-screen pt-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/fondo-gris.avif')" }}
        >
          <div className="container mx-auto px-4 pt-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 lg:col-span-2 max-w-[90%] mx-auto animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                  DE LA FINCA
                </h1>
                <p className="text-base md:text-lg lg:text-2xl text-white leading-relaxed">
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
              className="absolute right-0 top-90 -translate-y-1/2 w-[200px] h-[400px] floating-image z-100"
              width={300}
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

        {/* Second Section - Left aligned */}
        <section
          ref={(el: HTMLElement | null) => {
            sectionRefs.current[1] = el;
          }}
          className="relative min-h-screen flex items-center py-20"
        >
          <div className="absolute left-0 right-[30%] top-1/2 -translate-y-1/2 h-[80vh] rounded-r-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <Image
              src="/IMG/fondo_comida.JPG"
              alt="Farm to Table"
              layout="fill"
              objectFit="cover"
              className="mix-blend-overlay opacity-50"
            />
          </div>

          <div className="container relative z-10 max-w-6xl mx-auto px-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white hover:text-red-950">
                Nuestra Historia
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
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
            className="absolute top-1/2 right-[10%] w-[100px] h-[200px] md:w-[400px] md:h-[300px] floating-image z-20"
            width={400}
            height={500}
          />
        </section>
        {/* Fourth Section - Full width */}
        <section
          ref={(el: HTMLElement | null) => {
            sectionRefs.current[3] = el;
          }}
          className="relative min-h-screen flex items-center justify-center py-20"
        >
          <div className="absolute inset-x-8 md:inset-x-12 lg:inset-x-24 top-1/2 -translate-y-1/2 h-[80vh] bg-[#91211e] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <Image
              src="/img/fondo-gris.avif"
              alt="Fresh Ingredients"
              layout="fill"
              objectFit="cover"
              className="mix-blend-overlay opacity-50"
            />
          </div>
          
          <div className="container relative z-10 max-w-6xl mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Nuestra Comida
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
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
            className="absolute top-1/4 -right-20 w-[185px] h-[185px] md:w-[350px] md:h-[350px] floating-image z-40"
            width={350}
            height={350}
          />
        </section>
      </div>

      <Section
        ref={(el: HTMLElement | null) => {
          sectionRefs.current[2] = el;
        }}
        title="Our Mission"
        content="At Green Rebel, our mission is to make healthy eating accessible, enjoyable, and sustainable. We believe in the power of good food to nourish both body and planet, and we're committed to serving meals that are as good for you as they are for the environment."
        image="https://images.unsplash.com/photo-1490818387583-1baba5e638af"
        floatingImage={{
          src: "/png/img1_bg.png",
          alt: "Floating Lettuce",
          width: 400,
          height: 400,
        }}
        isActive={activeSection === 2}
      />

      <Section
        ref={(el: HTMLElement | null) => {
          sectionRefs.current[3] = el;
        }}
        title="Our Food"
        content="From farm-fresh salads to hearty grain bowls, every dish at Green Rebel is crafted with care using the finest ingredients. We prioritize local, organic produce and create flavor combinations that excite the palate while nourishing the body."
        image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
        floatingImage={{
          src: "https://www.pngmart.com/files/1/Mushroom-PNG-File.png",
          alt: "Floating Pepper",
          width: 250,
          height: 250,
        }}
        isActive={activeSection === 3}
        
      />

      <Products />
      <Mission />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

interface SectionProps {
  title: string;
  content: string;
  image: string;
  floatingImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  isActive: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ title, content, image, floatingImage, isActive }, ref) => {
    return (
      <section
        ref={ref}
        className="relative min-h-screen flex items-center py-20"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            style={{
              filter: "brightness(0.7)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {title}
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">{content}</p>
          </div>
        </div>

        <FloatingImage
          src={floatingImage.src}
          alt={floatingImage.alt}
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 floating-image z-20 transition-opacity duration-500 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
          width={floatingImage.width}
          height={floatingImage.height}
        />
      </section>
    );
  }
);

Section.displayName = "Section";
