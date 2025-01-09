"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import MenuSection from "@/components/menu-section";
import { menuItems, menuCategories } from "@/data/menu-items";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const pageTop = window.scrollY;
      const pageBottom = pageTop + window.innerHeight;
      const sections = sectionRefs.current;

      sections.forEach((section, index) => {
        if (section) {
          const elementTop = section.offsetTop;
          const elementBottom = elementTop + section.offsetHeight;

          if (elementTop <= pageBottom && elementBottom >= pageTop) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden" ref={containerRef}>
      <Header />

      {/* Hero Section with fixed background */}
      <section
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/img/cartonFondo.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="container mx-auto px-4 relative z-10"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 tracking-tight mb-6 text-balance">
              DE LA FINCA MENU
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 text-balance">
              EXPLORE OUR DELICIOUS FRESH MENU AND START MAKING THE RIGHT FOOD
              CHOICES TODAY.
            </p>
            <Button
              variant="outline"
              className="bg-transparent border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png"
                alt="Apple Logo"
                width={20}
                height={20}
                className="mr-2"
              />
              DESCARGAR MENU
            </Button>
          </div>
        </motion.div>

        <button
          onClick={() => {
            sectionRefs.current[1]?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-10"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Menu Sections */}
      <div
        className="relative z-10"
        style={{
          backgroundImage: "url('/fondo-comida.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-20">
          {menuCategories.map((category, index) => (
            <MenuSection
              key={category}
              ref={(el) => {
                sectionRefs.current[index + 1] = el;
              }}
              title={category}
              items={menuItems.filter((item) => item.category === category)}
              isActive={activeSection === index + 1}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
