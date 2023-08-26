import { useContext } from "react"
import { AuthContext } from "./AuthcontextProvider"
import {Navigate} from "react-router-dom";

const PrivateRouter=(props)=>{

    const {forState}= useContext(AuthContext);
    if(!forState.isAuth)
    {
        return <Navigate to="/login"/>
    }
    return props.children
}


export {PrivateRouter}