import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://phdurwazjpkuengnqyjo.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoZHVyd2F6anBrdWVuZ25xeWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5NDc3NDIsImV4cCI6MjA5MTUyMzc0Mn0.GhXi5NR4q4VQwm8fTrTssjzWEcYoTEnfev2b37V9KtU"

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function saveToSupabase(table, data) {
  const { data: result, error } = await supabase.from(table).insert([data])
  if (error) throw error
  return result
}
