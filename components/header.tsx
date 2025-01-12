'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const linkClass = (path: string) =>
    `text-white hover:text-primary-foreground transition-colors duration-200 ${
      isActive(path) ? 'font-bold border-b-2 border-primary-foreground' : ''
    }`

  const menuItems = [
    { href: '/', label: 'INICIO' },
    { href: '/menu', label: 'MENU' },
    { href: '/about', label: 'NOSOTROS' },
    { href: '/contact', label: 'CONTACTO' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/LogoDeLaFinca.png"
              alt="Restaurant Logo"
              width={150}
              height={50}
              priority
              className="h-12 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
            <Button variant="secondary" className="bg-white text-black hover:bg-white/90">
              ORDENE YA
            </Button>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
            <Button variant="secondary" className="bg-white text-black hover:bg-white/90">
              ORDENE YA
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

