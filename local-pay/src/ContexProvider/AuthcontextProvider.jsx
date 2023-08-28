import { createContext, useState } from "react"
export const AuthContext = createContext();

const initialState={
    email:"",
    password:"",
    mobile:"",
    firstName:"",
    lastName:"",
    gender:""
  };
const AuthcontextProvider=({children})=>{

    const [mainUser, setData] = useState(initialState)
    const [isAuth ,setIsAuth]= useState(false);

    const login =(res)=>{
        setData({
            email:`${res.email}`,
            password:`${res.password}`,
            mobile:`${res.mobile}`,
            firstName:`${res.firstName}`,
            lastName:`${res.lastName}`,
            gender:`${res.gender}`
        })
        {mainUser&& setIsAuth(true)}
        console.log(res)
        console.log(mainUser)
        
    }
    const logout =()=>{
        setIsAuth(false)
    }
    
    const {email,password,mobile,firstName,lastName,gender}=mainUser

    return <AuthContext.Provider value={{isAuth,login,logout,email,password,mobile,firstName,lastName,gender}}>{children}</AuthContext.Provider>
}

export {AuthcontextProvider}