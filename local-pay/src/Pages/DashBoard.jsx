import { Box,Grid,Center, HStack ,Image,Text, VStack,Button,useMediaQuery} from "@chakra-ui/react"
import { useState } from "react"
import { PaymentSection } from "./PaymentSection"

const DashBoard =()=>{
    const [methods, setMethods]= useState(false)
    const [isLargeScreen] = useMediaQuery("(max-width: 768px)");
    return <>
    <HStack justifyContent="space-between" marginRight="50px" marginLeft="50px" h="80px" p={4}>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7urHdOKUxYEvAYMnI6XEyQ1i9Rdr60rOVofJhz4M844mHKK1yUGXf3Ea2Oj2zs-pRVs&usqp=CAU" alt="user Logo" h="100%" _hover={{cursor:"pointer"}}/>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLd63aKSW5aeSlp5Z72J0CgS1gnPSvBEveg&usqp=CAU" alt="notification" h="100%" _hover={{cursor:"pointer"}}/>
    </HStack>
    <Box border="2px solid blue" h="150px" w={isLargeScreen? "80%":"50%"} margin="auto" borderRadius="20px" bg="blue.100" _hover={{cursor:"pointer"}}>
       <HStack justifyContent="space-evenly" marginTop="20px" >
          <VStack>
             <Text fontSize="30px" fontWeight="700" >Total Balance</Text>
             <Text  fontSize="30px" fontWeight="700" >$2000</Text>
          </VStack>
        <Button fontSize="25px"><span><Image src="https://w7.pngwing.com/pngs/632/307/png-transparent-paper-planes-send-newsletter-icon-blue-tinker-thumbnail.png" borderRadius="50%" h="30px" marginRight="20px"/></span> Send</Button>
       </HStack>
    </Box>

    <Grid templateColumns={['2fr', '1fr 1fr', '1fr 1fr 1fr 1fr']} gap="40px" p={4} margin="50px" padding={4} color="cyan.700" fontSize="25px" >
        <Box border="2px solid green" padding={4} borderRadius="15px" _hover={{bg:"lightblue", cursor: "pointer",color:"red",boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
            <Center> <Image src="https://e7.pngegg.com/pngimages/933/104/png-clipart-payment-computer-icons-money-credit-card-indian-rupee-sign-web-production-angle-text.png" alt="sedn" h="100px"w="100px" marginBottom={4}/> </Center> 
            <Text align="center">Send</Text>
        </Box>
        <Box border="2px solid blue" padding={4} borderRadius="15px" _hover={{bg:"lightblue",cursor: "pointer",color:"red",boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
            <Center> <Image src="https://w7.pngwing.com/pngs/279/210/png-transparent-wire-transfer-bank-account-payment-money-bank-angle-service-logo.png" alt="teansfer" h="100px"w="100px" marginBottom={4}/></Center> 
            <Text align="center">Transfer</Text>
        </Box>
        <Box border="2px solid green" padding={4} borderRadius="15px" _hover={{bg:"lightblue",cursor: "pointer",color:"red",boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
            <Center><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGN4mm7JafwUFCf1YBkaJ2A7S-51et6MR-w&usqp=CAU" alt="passbook" h="100px"w="100px" marginBottom={4}/></Center> 
             <Text align="center">Passbook</Text>
        </Box>
        <Box border="2px solid blue" padding={4} borderRadius="15px" _hover={{bg:"lightblue",cursor: "pointer",color:"red",boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}
        onClick={()=> setMethods(!methods)}>
            <Center><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmgSrHnwPvKhAjRiAI-DNhHlSHHThPoaodm3FF6anW0AIfxFCKHZjJFSzee2RSdu8oO4&usqp=CAU" alt="more" h="100px"w="100px" marginBottom={4}/></Center> 
            <Text align="center">More</Text>
        </Box>
      </Grid>
      {methods && <PaymentSection />}
    </>
}


export {DashBoard}