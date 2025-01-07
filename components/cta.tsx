import { Button } from "@/components/ui/button";

export default function LlamadoAccion() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para disfrutar comida real?</h2>
        <p className="text-xl mb-8 text-white/80">
          Únete a nosotros y prueba una comida que es deliciosa y buena para ti.
        </p>
        <Button
          size="lg"
          variant="outline"
          className="text-black border-white hover:bg-black hover:text-white"
        >
          Hacer Pedido
        </Button>
      </div>
    </section>
  );
}
