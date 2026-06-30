import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arcanum Coffee — Specialty Coffee México',
  description: 'Café de especialidad cultivado en las alturas de Oaxaca y Chiapas. Cada taza es un ritual.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
