"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const linkClass = (path: string) =>
    `text-white hover:text-primary-foreground transition-colors duration-200 ${
      isActive(path) ? "font-bold border-b-2 border-primary-foreground" : ""
    }`

  const menuItems = [
    { href: "/", label: "INICIO" },
    { href: "/menu", label: "MENU" },
    { href: "/about", label: "NOSOTROS" },
    { href: "/contact", label: "CONTACTO" },
  ]

  const handleCloseMobileMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center" aria-label="Ir al inicio">
            <Image
              src="/LogoDeLaFinca.png"
              alt="Logo de Restaurante De La Finca"
              width={150}
              height={50}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Navegación principal">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}

            {/* ✅ ORDENE YA -> Contacto */}
            <Button asChild variant="secondary" className="bg-white text-black hover:bg-white/90">
              <Link href="/contact" aria-label="Ir al formulario de contacto para ordenar">
                ORDENE YA
              </Link>
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-white"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center py-4 space-y-4" aria-label="Menú móvil">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(item.href)}
                onClick={handleCloseMobileMenu}
              >
                {item.label}
              </Link>
            ))}

            {/* ✅ ORDENE YA -> Contacto (y cierra el menú) */}
            <Button
              asChild
              variant="secondary"
              className="bg-white text-black hover:bg-white/90"
            >
              <Link
                href="/contact"
                onClick={handleCloseMobileMenu}
                aria-label="Ir al formulario de contacto para ordenar"
              >
                ORDENE YA
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
