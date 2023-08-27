import { createContext, useState } from "react"

export const AuthContext = createContext();

const AuthcontextProvider=({children})=>{

    const [isAuth ,setIsAuth]= useState(true);

    const login =()=>{
        setIsAuth(true)
    }
    const logout =()=>{
        setIsAuth(false)
    }

    return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>
}

export {AuthcontextProvider}