import { supabase } from "../../supabase"

interface SignInDataType {
    email: string;
    password: string;
}

export const signin  = (signInData: SignInDataType) => {
    return supabase.auth.signInWithPassword({...signInData}).then((res) => console.log(res))
}