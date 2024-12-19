import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_BASE_URL,
    import.meta.env.VITE_SERVICE_ROLE_KEY,
)
