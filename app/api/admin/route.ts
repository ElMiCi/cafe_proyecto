import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdminClient } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('x-admin-password')

  if (authHeader !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const supabase = getSupabaseAdminClient()
  const [{ data: newsletter, error: newsletterError }, { data: contacts, error: contactsError }] =
    await Promise.all([
      supabase.from('newsletter').select('*').order('created_at', { ascending: false }),
      supabase.from('contacts').select('*').order('created_at', { ascending: false })
    ])

  if (newsletterError || contactsError) {
    return NextResponse.json({ error: 'Error al obtener datos' }, { status: 500 })
  }

  return NextResponse.json({ newsletter, contacts })
}