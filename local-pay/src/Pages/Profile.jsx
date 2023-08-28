import { Box,Image, Text,Button, Grid, HStack, VStack, Center} from "@chakra-ui/react"
import { ArrowBackIcon} from '@chakra-ui/icons'
// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { AuthContext } from "../ContexProvider/AuthcontextProvider"
import style from "../Styles/profile.module.css"
import { AddBank } from "./AddBank";


const Profile =()=>{
    const {logout,email,mobile,firstName,lastName,gender}= useContext(AuthContext);
    return <>
    
    <Link to="/"> <Text paddingLeft="100px" fontSize="30px" mt="20px"><ArrowBackIcon/> Profile </Text></Link>
    <Grid templateColumns={'1fr 1fr'} gap="40%" className={style.mainBox}>
        <VStack>
            <Text fontSize="35px" fontWeight="bold" color="green">{firstName+" "+lastName}</Text>
            <Text fontSize="20px" color="blue">{email}</Text>
            <Text fontSize="20px">+91 {mobile}</Text>
            <HStack>
                <Image w="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7BDhPzBT9cTSXm-3M9eSnLoxNz9nyrvRMg&usqp=CAU" alt="logo" borderRadius="10px"/>
                <Text fontSize="20px" color="red.400">$1,589 Rewards earned</Text>
            </HStack>
        </VStack>
        <Box w="40%" m="10px" >
            <Image 
            src={ gender=="male"?
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTOg603d6teCcurg5osM1lWw-FEww8azCC0B3sl2-EHMtedVFEbfL2GWqJM4nBz_GGX8&usqp=CAU"
                :"https://img.freepik.com/premium-vector/portrait-caucasian-woman-avatar-female-person-vector-icon-adult-flat-style-headshot_605517-26.jpg?w=2000"} 
                 borderRadius="50%" boxShadow="2xl"/>
        </Box>
    </Grid>

    <Text paddingLeft="150px" marginTop="30px" fontSize="25px">Payment Methods</Text>
   <Grid className={style.payMethod} templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']} gap="30px">
       <Link to="/add_bank_account"><HStack border="1px" w="250px" h="100px" borderRadius="10px" bg="green.100">
           <Image src="https://w7.pngwing.com/pngs/279/210/png-transparent-wire-transfer-bank-account-payment-money-bank-angle-service-logo.png" alt="bank Logo" borderRadius="50%" w="50px" h="50px" ml="10px"/>
            <Text ml="10px">Bank account</Text>
        </HStack></Link>
        <Link> <HStack border="1px" w="250px" h="100px" borderRadius="10px" bg="bisque">
             <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6SUdnBppVXH8wLfk4kXPjsAV_VZf8-RmPQ&usqp=CAU" alt="card Logo" borderRadius="50%" w="50px" h="50px" ml="10px"/>
             <Text ml="10px">Debit/Credit card</Text>
        </HStack></Link>
        <Link> <HStack border="1px" borderStyle="dashed" w="250px" h="100px" borderRadius="10px" >
             <Text ml="20%" >Add payment Method</Text>
        </HStack></Link>
   </Grid>
   <br />
    <hr />
    <Text paddingLeft="150px" marginTop="30px" fontSize="25px">Other</Text>
    <Box className={style.otherStyle} display="flex" >
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8McUPbblNV3FcAh2BvxsVucNenA_0vtrX4KBbQ1LuRZuXrskTE1-kjnTD4iQxVEL0qkE&usqp=CAU" 
         alt="favourite logo"
          className={style.otherChild_Img}
         />
        <Text mt="10px" fontSize="20px" color="cyan.800">Favourite</Text>
    </Box>
    <Box className={style.otherStyle}>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Moe_Epsilon_QR_code.png"
          alt="QR Code Logo" borderRadius="0px" p="5px" 
         className={style.otherChild_Img}
         />
        <Text mt="10px" fontSize="20px" color="cyan.800">QR Codes</Text>
    </Box>
    <Box className={style.otherStyle}>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lyfJZdW3vk3syqPhDSfqVLUGIrdH26KdEQWa8a4P8OvxTcVuHeQ_zC0j97g5E0ReY68&usqp=CAU" 
         className={style.otherChild_Img} p="10px" alt="invite friends logo"
        />
        <Text mt="10px" fontSize="20px" color="cyan.800">Invite friends</Text>
    </Box>
    <Box className={style.otherStyle}>
        <Image  src="https://e7.pngegg.com/pngimages/548/792/png-clipart-gear-symbol-computer-icons-encapsulated-postscript-logo-setting-miscellaneous-logo.png"
         className={style.otherChild_Img} p="10px" alt="Setting logo"
         />
        <Text mt="10px" fontSize="20px" color="cyan.800">Setting</Text>
    </Box>
    <Box className={style.otherStyle}>
        <Image src="https://t3.ftcdn.net/jpg/05/10/88/82/360_F_510888200_EentlrpDCeyf2L5FZEeSfgYaeiZ80qAU.jpg"
          className={style.otherChild_Img} alt="Get help logo"
        />
        <Text mt="10px" fontSize="20px" color="cyan.800">Get help</Text>
    </Box>
    <Center><Button onClick={()=> logout()} m="20px" w="100px" bg="blue" color="white" _hover={{bg:"green"}}>Logout</Button></Center>
    </>
}

export {Profile}