import { createContext, useState } from "react"

export const AuthContext = createContext();

export const initState={
    email:"",
    password:"",
    isAuth:true
}
const AuthcontextProvider=({children})=>{

    const [forState ,setForState]= useState(initState);

    const login =(loginData)=>{
        
    }
    const logout =()=>{
        setForState(initState)
    }


    return <AuthContext.Provider value={{forState,login,logout}}>{children}</AuthContext.Provider>
}

export {AuthcontextProvider}