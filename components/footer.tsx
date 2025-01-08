import Link from 'next/link'
import { Facebook, Instagram, Twitter, Phone, Mail, MessageCircle, Clock, FileText } from 'lucide-react'

export default function Footer() {
  const whatsappNumber = '+50688260107'
  const whatsappMessage = encodeURIComponent('Hola, me gustaría hacer una reserva.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="flex flex-col space-y-2">
              <Link href="tel:+50688260107" className="text-white/80 hover:text-white flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+506 2774 0156</span>
              </Link>
              <Link href="mailto:delafincaquepos@gmail.com" className="text-white/80 hover:text-white flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>delafincaquepos@gmail.com</span>
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white flex items-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <div className="flex items-start">
              <Clock className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white/80">Lunes - Viernes: 12:00 PM - 10:00 PM</p>
                <p className="text-white/80">Sábado: 5:00 PM - 10:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-white flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  <span>Política de Privacidad</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-white flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  <span>Términos de Servicio</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-white">
                <Facebook className="h-8 w-8" />
              </Link>
              <Link href="https://www.instagram.com/delafincaquepos/" className="text-white/80 hover:text-white">
                <Instagram className="h-8 w-8" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Twitter className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} De La Finca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

