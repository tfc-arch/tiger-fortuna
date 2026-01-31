import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zkgwwycjqiktvhzuauqo.supabase.co'
const supabasePublishableKey = 'sb_publishable__mveNNwJ1npkdqe9jIF9jA_s9JaSPJt'

export const supabase = createClient(supabaseUrl, supabasePublishableKey)