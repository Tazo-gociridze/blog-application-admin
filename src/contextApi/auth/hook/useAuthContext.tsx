import { useContext } from "react"
import { AuthContext } from ".."


export const useAuthContext = () => {
    const authContext = useContext(AuthContext)

     if(!authContext){
        throw new Error("context error, use context provider!!!")
     }

    return authContext
}