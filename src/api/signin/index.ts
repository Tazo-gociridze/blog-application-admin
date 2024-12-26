import { supabase } from "../../supabase"

export interface SignInDataType {
    email: string;
    password: string;
}

export const signin  = (signInData: SignInDataType) => {
    return supabase.auth.signInWithPassword({...signInData}).then((res) => res.data.user)
}