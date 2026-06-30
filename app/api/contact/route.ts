import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name?.trim() || !email || !message?.trim()) {
    return NextResponse.json({ error: 'Todos los campos son requeridos' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
  }

  if (message.trim().length < 10) {
    return NextResponse.json({ error: 'El mensaje es muy corto' }, { status: 400 })
  }

  const supabase = getSupabaseClient()
  const { error } = await supabase
    .from('contacts')
    .insert([{
      name: name.trim(),
      email: email.toLowerCase().trim(),
      message: message.trim()
    }])

  if (error) {
    return NextResponse.json({ error: 'Error al enviar el mensaje' }, { status: 500 })
  }

  return NextResponse.json({ success: true }, { status: 201 })
}
