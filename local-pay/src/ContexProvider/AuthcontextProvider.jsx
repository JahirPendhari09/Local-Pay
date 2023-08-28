import { createContext, useState } from "react"
export const AuthContext = createContext();

const initialState={
    email:"",
    password:"",
    mobile:"",
    firstName:"",
    lastName:"",
    gender:"",
    accountH_Name:"",
    account_No:"",
    ifsc:"",
    balance:""
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
            gender:`${res.gender}`,
            id:`${res.id}`,
            accountH_Name:`${res.accountH_Name? res.accountH_Name:"AddAccount"}`,
            account_No:`${res.account_No? res.account_No:"AddAccount"}`,
            ifsc:`${res.ifsc? res.ifsc:"AddAccount"}`,
            balance:`${res.balance? res.balance:"AddAccount"}`
        })
        {mainUser&& setIsAuth(true)}
        console.log(res)
        console.log(mainUser)
        
    }
    const logout =()=>{
        setIsAuth(false)
    }
    
    const {email,password,mobile,firstName,lastName,gender,id,accountH_Name,account_No,ifsc,balance}=mainUser

    return <AuthContext.Provider value={{isAuth,login,logout,email,password,mobile,firstName,lastName,gender,id
        ,accountH_Name,account_No,ifsc,balance}}>{children}</AuthContext.Provider>
}

export {AuthcontextProvider}