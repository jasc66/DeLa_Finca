import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function Products() {
  const products = [
    {
      name: "Fresh Bowl",
      description: "Mixed greens, quinoa, avocado, and our signature dressing",
      image: "/img/comida1.jpg"
    },
    {
      name: "Power Plate",
      description: "Grilled chicken, sweet potato, and seasonal vegetables",
      image: "/img/comida2.jpg"
    },
    {
      name: "Green Smoothie",
      description: "Blend of organic fruits and leafy greens",
      image: "/img/comida3.jpg"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Signature Dishes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

