import { createClient } from '@supabase/supabase-js';
/** @type {string} */
const org = import.meta.env.VITE_SUPABASE_ORG;
/** @type {string} */
const key = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(`https://${org}.supabase.co`, key);
