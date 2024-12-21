import { FC, PropsWithChildren } from "react"
import { useAuthContext } from "../../contextApi/auth/hook/useAuthContext"
import { Navigate, Outlet } from "react-router-dom"

export const AuthRouteGuard: FC<PropsWithChildren> = ({children}) => {
    const { user } = useAuthContext()
    console.log(user)

    if(user){
        <Navigate to={"/"}/>     
    }

    return children || <Outlet />
}


export const RouteGuardWhileSignOut: FC<PropsWithChildren> = ({ children }) => {

    const {user} = useAuthContext()
    
    console.log(user)

    if(!user){
        <Navigate to={"/"}/>
    }

    return children || <Outlet />
}
