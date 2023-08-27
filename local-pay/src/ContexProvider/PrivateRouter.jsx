import { useContext } from "react"
import { AuthContext } from "./AuthcontextProvider"
import {Navigate} from "react-router-dom";

const PrivateRouter=(props)=>{

    const {isAuth}= useContext(AuthContext);
    if(isAuth==false)
    {
        return <Navigate to="/login"/>
    }
    return props.children
}


export {PrivateRouter}