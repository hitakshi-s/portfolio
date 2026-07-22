const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabaseEnabled = Boolean(supabaseUrl && supabaseAnonKey)

async function loadClient() {
  const { createClient } = await import('@supabase/supabase-js')
  return createClient(supabaseUrl!, supabaseAnonKey!)
}

type SupabaseClient = Awaited<ReturnType<typeof loadClient>>
let clientPromise: Promise<SupabaseClient> | null = null

// The Supabase SDK is only pulled into a chunk when a post is actually opened, not on initial page load.
export function loadSupabase(): Promise<SupabaseClient | null> {
  if (!supabaseEnabled) return Promise.resolve(null)
  if (!clientPromise) clientPromise = loadClient()
  return clientPromise
}
