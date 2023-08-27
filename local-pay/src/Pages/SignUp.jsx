
import { useState } from "react";
import { Button, Input,Text,Box, Center,Image, HStack, Select } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import style from "../Styles/login.module.css"
function SignUp() {
  const [formState, setFormState] = useState({ email:"",password:""});
  const [formHandle , setFormHandle]= useState(true)

  const handleChange =(e)=>{
    const {name,value}= e.target
    setFormState({
      ...formState, [name]:value
    })
  }
  const handleSubmit=()=>{

  }
//    const {email, password}=formState
  return <Box h="550px" className={style.mainBox}>

     <Text textAlign="center" marginBottom="30px" fontSize="35px" fontWeight="600">Sign Up</Text>
     {formHandle ? <Box> <label >Email </label>
     <Input placeholder="Email"type="email" mt="10px" mb="10px"/>

     <label>Password</label>
     <Input placeholder="Password" type="password" mt="10px"mb="10px"/>

     <label>Mobile Number</label>
     <Input placeholder="Mobile Number" type="number" mt="10px"mb="10px"/>

     <Center><Button bg="blue.100" onClick={()=> setFormHandle(!formHandle)} mt="15px">Next</Button></Center> </Box>
     :<Box><label >First Name </label>
     <Input placeholder="First Name"type="text" mt="10px"mb="10px"/>

     <label>Last Name</label>
     <Input placeholder="Last Name" type="text" mt="10px"mb="10px"/>

     <label>Gender</label>
     <Select placeholder="Select Gender" mt="10px"mb="10px">
       <option value="male">Male</option>
       <option value="female">Female</option>
     </Select>
     <HStack justifyContent="space-between" mt="15px">
      <Button onClick={()=> setFormHandle(!formHandle)} color="white"bg="blue.300">Back</Button>
      <Button bg="green" color="white"onClick={handleSubmit}>Submit</Button>
     </HStack>
     </Box>}
     <br />
     <Text>Have an Account? <span style={{color:"blue"}}><Link to="/login">Login</Link></span></Text>
     <br />
     <HStack justifyContent="center" gap="20px" >
       <Image src="../google.png" alt="" w="30px" _hover={{cursor:"pointer"}}/>
      <Image src="../facebook.png" alt="" w="30px" _hover={{cursor:"pointer"}}/>
     </HStack>
  </Box>
}

export {SignUp};
