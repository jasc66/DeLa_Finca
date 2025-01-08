'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from '@/contexts/ToastContext'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [details, setDetails] = useState('')
  const [peopleCount, setPeopleCount] = useState('')
  const [reservationType, setReservationType] = useState('lunch')
  const { showToast } = useToast()

  const isValidReservationTime = (date: string, time: string) => {
    const reservationDate = new Date(`${date}T${time}`)
    const day = reservationDate.getDay()
    const hours = reservationDate.getHours()
    const minutes = reservationDate.getMinutes()

    // Convert time to minutes since midnight
    const timeInMinutes = hours * 60 + minutes

    // Monday - Friday (1-5): 12:00 PM - 10:00 PM
    if (day >= 1 && day <= 5) {
      return timeInMinutes >= 12 * 60 && timeInMinutes <= 22 * 60
    }
    
    // Saturday (6): 5:00 PM - 10:00 PM
    if (day === 6) {
      return timeInMinutes >= 17 * 60 && timeInMinutes <= 22 * 60
    }

    // Sunday (0): Closed
    return false
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isValidReservationTime(date, time)) {
      showToast('error', 'Por favor, seleccione un horario dentro de nuestras horas de operación: Lunes - Viernes: 12:00 PM - 10:00 PM, Sábado: 5:00 PM - 10:00 PM')
      return
    }
    
    const whatsappNumber = '+50627740156'
    const message = encodeURIComponent(
      `Nueva reserva:
      Nombre: ${name}
      Teléfono: ${phone}
      Fecha: ${date}
      Hora: ${time}
      Número de personas: ${peopleCount}
      Tipo de reserva: ${reservationType === 'lunch' ? 'Almuerzo' : 'Cena'}
      Detalles: ${details}`
    )
    
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappLink, '_blank')

    showToast('success', 'Su solicitud de reserva ha sido enviada con éxito.')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="phone">Teléfono de contacto</Label>
        <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="date">Fecha de reserva</Label>
          <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="time">Hora de reserva</Label>
          <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
      </div>
      <div>
        <Label htmlFor="peopleCount">Número de personas</Label>
        <Input 
          id="peopleCount" 
          type="number" 
          min="1" 
          value={peopleCount} 
          onChange={(e) => setPeopleCount(e.target.value)} 
          required 
        />
      </div>
      <div>
        <Label htmlFor="reservationType">Tipo de reserva</Label>
        <select 
          id="reservationType" 
          value={reservationType} 
          onChange={(e) => setReservationType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        >
          <option value="lunch">Almuerzo</option>
          <option value="dinner">Cena</option>
        </select>
      </div>
      <div>
        <Label htmlFor="details">Detalles o peticiones especiales</Label>
        <Textarea id="details" value={details} onChange={(e) => setDetails(e.target.value)} />
      </div>
      <Button type="submit" className="w-full bg-[#91211e] hover:bg-[#7a1c19] text-white">
        Enviar Reserva
      </Button>
    </form>
  )
}

