import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://scxscjrnjvbidiycutin.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_78DqIGvKcyX1gjIuPzl7BQ_XoHKawTg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
