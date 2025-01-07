import Link from 'next/link'
import { Facebook, Instagram, Twitter, Phone, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  const whatsappNumber = '+50627740156'
  const whatsappMessage = encodeURIComponent('Hola, me gustaría hacer una reserva.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <div className="flex items-center mb-2">
              <Phone className="h-4 w-4 mr-2" />
              <p className="text-white/80">Tel. +506 2774 0156</p>
            </div>
            <Link
              href="tel:+50627740156"
              className="text-white/80 hover:text-white flex items-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              Llamar
            </Link>
            <div className="flex items-center mt-2 mb-2">
              <Mail className="h-4 w-4 mr-2" />
              <p className="text-white/80">Email: delafincaquepos@gmail.com</p>
            </div>
            <Link
              href="mailto:delafincaquepos@gmail.com"
              className="text-white/80 hover:text-white flex items-center"
            >
              <Mail className="h-4 w-4 mr-2" />
              Enviar Email
            </Link>
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white flex items-center mt-2"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Enviar mensaje por WhatsApp
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-4">Horario</h3>
            <p className="text-white/80">Lunes - Viernes: 12:00 PM - 10:00 PM</p>
            <p className="text-white/80">Sábado: 5:00 PM - 10:00 PM</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/delafincaquepos/" className="text-white/80 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} De La Finca. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

