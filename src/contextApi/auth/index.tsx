import { FC, PropsWithChildren, createContext, useState } from "react";

export const AuthContext = createContext<any>(null)

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState(null)  

  function handleStoreUser(user: any){
     setUser(user)
  }

  return <AuthContext.Provider value={{user, handleStoreUser}}>{children}</AuthContext.Provider>
};

