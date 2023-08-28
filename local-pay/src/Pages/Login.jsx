
import { useContext, useState } from "react";
import { Button, Input, Text, Box, Image, HStack, Center } from '@chakra-ui/react'
import { Link, Navigate } from "react-router-dom";
import style from "../Styles/login.module.css";
import { AuthContext } from "../ContexProvider/AuthcontextProvider";
import axios from "axios"

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const { isAuth, login} = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/" />
  }

  const checkLogin=(res)=> {
    if (res.length) { 
      return login(res[0]) 
    }
    else {
      alert("Login failed!...email or password Incorrect");
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://local-pay.onrender.com/users?email=${email}&password=${password}`)
      .then(res => checkLogin(res.data))
  }

  const { email, password } = formState;

  if (isAuth) {
    return <Navigate to="/" />
  }
  return <Box className={style.mainBox} >

    <Text textAlign="center" marginBottom="50px" fontSize="35px" fontWeight="600">Sign In</Text>
    <form onSubmit={handleSubmit}>
      <label >Email </label>
      <Input
        placeholder="Email"
        type="email"
        name="email"
        marginBottom="20px"
        marginTop="10px"
        value={email}
        onChange={(e) => {
          setFormState({ ...formState, [e.target.name]: e.target.value })
        }}
      />
      <label>Password</label>
      <Input
        placeholder="Password"
        type="password"
        name="password"
        marginBottom="20px"
        marginTop="10px"
        value={password}
        onChange={(e) => {
          setFormState({ ...formState, [e.target.name]: e.target.value })
        }}
      />

      <Center><Button bg="blue.100" type="submit">Login</Button></Center>
    </form>
    <br />
    <Text>New User ? <span style={{ color: "blue" }}><Link to="/signUp">Register</Link></span></Text>
    <br />
    <HStack justifyContent="center" gap="20px" >
      <Image src="../google.png" alt="" w="30px" _hover={{ cursor: "pointer" }} />
      <Image src="../facebook.png" alt="" w="30px" _hover={{ cursor: "pointer" }} />
    </HStack>

  </Box>
}

export { Login };
