import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "The best healthy food I've ever had! Fresh ingredients and amazing flavors.",
      rating: 5
    },
    {
      name: "John D.",
      text: "Great service and even better food. Their bowls are my go-to lunch option.",
      rating: 5
    },
    {
      name: "Emily R.",
      text: "Love their commitment to sustainable practices and local sourcing.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-muted">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

