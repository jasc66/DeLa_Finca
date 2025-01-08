import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para probar algo delicioso?</h2>
        <p className="text-xl mb-8 text-white/80">
          Descubre nuestra variedad de platos frescos y sabrosos.
        </p>
        <Link href="/menu" passHref>
          <Button size="lg" variant="outline" className="text-black border-white hover:bg-black hover:text-white">
            Ver Menú
          </Button>
        </Link>
      </div>
    </section>
  )
}

