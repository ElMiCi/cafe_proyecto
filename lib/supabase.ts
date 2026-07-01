import { createClient } from '@supabase/supabase-js'

export type NewsletterEntry = {
  id: string
  email: string
  created_at: string
}

export type ContactEntry = {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Solo para uso en el servidor (Route Handlers). Nunca importar en un
// componente 'use client' ni exponer esta key con prefijo NEXT_PUBLIC_.
export function getSupabaseAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false }
  })
}