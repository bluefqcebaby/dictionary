import { Database } from "@/types/auto-db";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
