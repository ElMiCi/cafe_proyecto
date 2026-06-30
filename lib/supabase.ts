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
