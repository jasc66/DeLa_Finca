"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/contexts/ToastContext"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("") // YYYY-MM-DD
  const [time, setTime] = useState("") // HH:MM
  const [details, setDetails] = useState("")
  const [peopleCount, setPeopleCount] = useState("")
  const [reservationType, setReservationType] = useState<"lunch" | "dinner">("lunch")
  const { showToast } = useToast()

  function parseLocalDateTime(dateStr: string, timeStr: string) {
    // dateStr: YYYY-MM-DD, timeStr: HH:MM
    if (!dateStr || !timeStr) return null

    const [y, m, d] = dateStr.split("-").map(Number)
    const [hh, mm] = timeStr.split(":").map(Number)

    // Validaciones básicas
    if (!y || !m || !d || Number.isNaN(hh) || Number.isNaN(mm)) return null

    // Mes en JS es 0-based
    const dt = new Date(y, m - 1, d, hh, mm, 0, 0)
    if (Number.isNaN(dt.getTime())) return null

    return dt
  }

  const isValidReservationTime = (dateStr: string, timeStr: string) => {
    const reservationDate = parseLocalDateTime(dateStr, timeStr)
    if (!reservationDate) return false

    const day = reservationDate.getDay() // 0=Dom, 1=Lun... 6=Sáb
    const hours = reservationDate.getHours()
    const minutes = reservationDate.getMinutes()

    const timeInMinutes = hours * 60 + minutes

    // Lunes - Viernes (1-5): 12:00 - 22:00
    if (day >= 1 && day <= 5) {
      return timeInMinutes >= 12 * 60 && timeInMinutes <= 22 * 60
    }

    // Sábado (6): 17:00 - 22:00
    if (day === 6) {
      return timeInMinutes >= 17 * 60 && timeInMinutes <= 22 * 60
    }

    // Domingo (0): cerrado
    return false
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isValidReservationTime(date, time)) {
      showToast(
        "error",
        "Por favor, seleccione un horario dentro de nuestras horas de operación: Lunes - Viernes: 12:00 PM - 10:00 PM, Sábado: 5:00 PM - 10:00 PM"
      )
      return
    }

    // Para wa.me, usar solo dígitos (sin +)
    const whatsappNumber = "50627740156"

    const message = encodeURIComponent(
      `Nueva reserva:
Nombre: ${name}
Teléfono: ${phone}
Fecha: ${date}
Hora: ${time}
Número de personas: ${peopleCount}
Tipo de reserva: ${reservationType === "lunch" ? "Almuerzo" : "Cena"}
Detalles: ${details}`
    )

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappLink, "_blank", "noopener,noreferrer")

    showToast("success", "Su solicitud de reserva ha sido enviada con éxito.")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="phone">Teléfono de contacto</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="date">Fecha de reserva</Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="time">Hora de reserva</Label>
          <Input
            id="time"
            name="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="peopleCount">Número de personas</Label>
        <Input
          id="peopleCount"
          name="peopleCount"
          type="number"
          min={1}
          inputMode="numeric"
          value={peopleCount}
          onChange={(e) => setPeopleCount(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="reservationType">Tipo de reserva</Label>
        <select
          id="reservationType"
          name="reservationType"
          value={reservationType}
          onChange={(e) => setReservationType(e.target.value as "lunch" | "dinner")}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        >
          <option value="lunch">Almuerzo</option>
          <option value="dinner">Cena</option>
        </select>
      </div>

      <div>
        <Label htmlFor="details">Detalles o peticiones especiales</Label>
        <Textarea
          id="details"
          name="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full bg-[#91211e] hover:bg-[#7a1c19] text-white">
        Enviar Reserva
      </Button>
    </form>
  )
}
