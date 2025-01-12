import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TerminosYPoliticas() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-[#e6d5c3] py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#91211e]">Términos y Políticas</h1>
          <Card className="mb-8">
            <CardContent className="prose max-w-none p-6">
              <h2 className="text-2xl font-semibold mb-4">Términos de Uso</h2>
              <p>Al acceder y utilizar el sitio web de De La Finca, usted acepta cumplir con estos términos de uso. Nos reservamos el derecho de modificar estos términos en cualquier momento sin previo aviso.</p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Uso del Sitio</h3>
              <p>Este sitio web es para su uso personal y no comercial. No debe utilizar este sitio de ninguna manera que cause, o pueda causar, daño al sitio o deterioro de la disponibilidad o accesibilidad del mismo.</p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Reservas</h3>
              <p>Las reservas realizadas a través de nuestro sitio web están sujetas a disponibilidad. Nos reservamos el derecho de cancelar o modificar las reservas en circunstancias excepcionales.</p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Contenido del Usuario</h3>
              <p>Al publicar contenido en nuestro sitio (por ejemplo, reseñas), usted nos otorga una licencia no exclusiva para usar, reproducir y editar dicho contenido.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="prose max-w-none p-6">
              <h2 className="text-2xl font-semibold mb-4">Política de Privacidad</h2>
              <p>En De La Finca, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad explica cómo recopilamos, usamos y protegemos su información.</p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Recopilación de Información</h3>
              <p>Recopilamos información que usted nos proporciona directamente, como su nombre y dirección de correo electrónico cuando realiza una reserva o se suscribe a nuestro boletín.</p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Uso de la Información</h3>
              <p>Utilizamos su información para procesar reservas, personalizar su experiencia en nuestro sitio web y comunicarnos con usted sobre nuestros servicios.</p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Protección de Datos</h3>
              <p>Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado y uso indebido.</p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Sus Derechos</h3>
              <p>Usted tiene derecho a acceder, corregir o eliminar su información personal. Para ejercer estos derechos, por favor contáctenos a través de la información proporcionada en nuestro sitio web.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

