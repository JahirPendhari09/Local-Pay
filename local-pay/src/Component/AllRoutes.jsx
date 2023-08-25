import {Routes,Route} from "react-router-dom"
import { Home } from "../Pages/Home"
import { Login} from "../Pages/Login"
import { SignUp } from "../Pages/SignUp"
import { AddCard } from "../Pages/AddCard"
import { DashBoard } from "../Pages/DashBoard"
const AllRoutes=()=>{
    return <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/add" element={<AddCard/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
      </Routes>
    </>
}

export default AllRoutes