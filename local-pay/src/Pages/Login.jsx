
import { useState } from "react";
import { Button, Input,Text,Box, Center,Image, HStack,VStack } from '@chakra-ui/react'
import { Link } from "react-router-dom";

function Login() {
  const [formState, setFormState] = useState({ email:"",password:""});

  const handleChange =(e)=>{
    const {name,value}= e.target
    setFormState({
      ...formState, [name]:value
    })
  }
  
  return <Box w="400px" h="500px" margin="auto" style={{boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}
   marginTop="50px" marginBottom="50px" borderRadius="20px" p="30px">

     <Text textAlign="center" marginBottom="50px" fontSize="35px" fontWeight="600">Sign In</Text>

     <label >Email </label>
     <Input 
        placeholder="Email"
        type="email"
        marginBottom="20px"
        marginTop="10px"
        value={formState.email}
        onChange={handleChange}
         />

     <label>Password</label>
     <Input
        placeholder="Password"
        type="password"
        marginBottom="20px" 
        marginTop="10px"
        value={formState.password}
        onChange={handleChange}
         />

     <Center><Button bg="blue.100">Login</Button></Center>
     <br />
     <Text>New User ? <span style={{color:"blue"}}><Link to="/signUp">Register</Link></span></Text>
     <br />
     <HStack justifyContent="center" gap="20px" >
       <Image src="../google.png" alt="" w="30px" _hover={{cursor:"pointer"}}/>
      <Image src="../facebook.png" alt="" w="30px" _hover={{cursor:"pointer"}}/>
     </HStack>
  </Box>
}

export {Login};
