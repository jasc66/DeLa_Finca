import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Eat Real?</h2>
        <p className="text-xl mb-8 text-white/80">
          Join us for a meal that's good for you and tastes amazing.
        </p>
        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
          Order Now
        </Button>
      </div>
    </section>
  )
}

