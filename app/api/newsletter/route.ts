import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
  }

  const supabase = getSupabaseClient()
  const { error } = await supabase
    .from('newsletter')
    .insert([{ email: email.toLowerCase().trim() }])

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'Este email ya está registrado' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Error al guardar el registro' }, { status: 500 })
  }

  return NextResponse.json({ success: true }, { status: 201 })
}
