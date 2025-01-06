import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-white/80">123 Healthy Street</p>
            <p className="text-white/80">City, State 12345</p>
            <p className="text-white/80">Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Hours</h3>
            <p className="text-white/80">Mon-Fri: 11am - 9pm</p>
            <p className="text-white/80">Sat-Sun: 10am - 10pm</p>
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
              <Link href="#" className="text-white/80 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Your Restaurant Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

