
import { useState } from "react";
import { Button, Input,Text,Box, Center,Image, HStack, Select } from '@chakra-ui/react'
import { Link, Navigate } from "react-router-dom";
import style from "../Styles/login.module.css"
import axios from "axios";
import LoadingSkeleton from "../Component/LoadingSkeleton"


const initialState={
  email:"",
  password:"",
  mobile:"",
  firstName:"",
  lastName:"",
  gender:""
};

function SignUp() {
  const [userData, setData] = useState(initialState)
  const [formHandle , setFormHandle]= useState(true)
  const [loading, setLoading]= useState(false);
  const [gotoLogin, setGotoLogin]= useState(false)

  const handleChange=(e)=>{
		e.preventDefault();
		setData({...userData, [e.target.name]:e.target.value})
	}
  const handleSubmit=()=>{
    setLoading(true)
      axios({
        url:`https://local-pay.onrender.com/users`,
        method:"post",
        data:userData
      }).then(res =>{ 
        setLoading(false); 
        setFormHandle(true);
        setGotoLogin(true)
      })
  }
  if(gotoLogin)
  {
    return <Navigate to="/login"/>
  }
  const {email, password,mobile,firstName,lastName, gender}=userData;


  if(loading)
  {
      return <LoadingSkeleton/>
  }

  return <Box bg="gray.500" p="30px">
    <Box h="550px" className={style.mainBox} bg="white">

     <Text textAlign="center" marginBottom="30px" fontSize="35px" fontWeight="600">Sign Up</Text>

     {formHandle ? <Box> <label >Email </label>
     <Input 
        placeholder="Email"
        type="email" 
        mt="10px" 
        mb="10px"
        name="email"
        value={email}
        onChange={handleChange}
      />

     <label>Password</label>
     <Input 
        placeholder="Password"
        type="password"
        mt="10px"
        mb="10px"
        name="password"
        value={password}
        onChange={handleChange}
      />

     <label>Mobile Number</label>
     <Input 
        placeholder="Mobile Number"
        type="number"
        mt="10px"
        mb="10px"
        name="mobile"
        value={mobile}
        onChange={handleChange}
      />
      <Center>
        <Button bg="blue.100" onClick={()=> setFormHandle(!formHandle)} mt="15px">Next</Button>
      </Center>
    </Box>
    :<Box>
      <label >First Name </label>
      <Input 
        placeholder="First Name" 
        type="text" 
        mt="10px"
        mb="10px"
        name="firstName"
        value={firstName}
        onChange={handleChange}
      />

     <label>Last Name</label>
     <Input 
        placeholder="Last Name" 
        type="text" 
        mt="10px"
        mb="10px"
        name="lastName"
        value={lastName}
        onChange={handleChange}
      />

     <label>Gender</label>
     <Select 
        placeholder="Select Gender" 
        mt="10px"
        mb="10px"
        name="gender"
        value={gender}
        onChange={handleChange}
      >
       <option value="male">Male</option>
       <option value="female">Female</option>
     </Select>

     <HStack justifyContent="space-between" mt="15px">
      <Button onClick={()=> setFormHandle(!formHandle)} color="white"bg="blue.300">Back</Button>
      <Button bg="green" color="white"onClick={handleSubmit}>Submit</Button>
     </HStack>
    </Box>}

    <br />  

     <Text>Have an Account? 
        <span style={{color:"blue"}}>
          <Link to="/login">Login</Link>
        </span>
      </Text>
     <br />

     <HStack justifyContent="center" gap="20px" >
       <Image src="../google.png" alt="" w="30px" _hover={{cursor:"pointer"}}/>
       <Image src="../facebook.png" alt="" w="30px" _hover={{cursor:"pointer"}}/>
     </HStack>
  </Box>
  </Box>
}

export {SignUp};
