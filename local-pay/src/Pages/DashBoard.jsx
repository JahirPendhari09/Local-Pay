import { Box,Grid,Center, HStack ,Image,Text, VStack,Button,useMediaQuery} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { PaymentSection } from "./PaymentSection"
import style from "../Styles/payment.module.css"
import { Link } from "react-router-dom"
import axios from "axios"

const bgColor=["lightgreen", "pink", "lightblue", "orange","lightgray"]
// const history=[
//     {
//         id:0,
//         firstName:"John",
//         lastName: "Doe",
//         location:"Sent",
//         money:"$310",
//         date:"14 Jan 2023"
//     },
//     {
//         id:1,
//         firstName:"Jahir",
//         lastName: "Pendhari",
//         location:"Received",
//         money:"$1000",
//         date:"15 Feb 2023"
//     },
//     {
//         id:2,
//         firstName:"Akshay",
//         lastName: "Patil",
//         location:"Exchange",
//         money:"$100",
//         date:"21 Feb 2023"
//     },
//     {
//         id:4,
//         firstName:"TATA",
//         lastName: "Balanced",
//         location:"Mutual Funds",
//         money:"$500",
//         date:"25 Feb 2023"
//     },
//      {
//         id:5,
//         firstName:"Salman",
//         lastName: "Khan",
//         location:"Recieved",
//         money:"$150",
//         date:"25 Feb 2023"
//     }
// ]
const DashBoard =()=>{
    const [extraPaymentSection, setExtraPaymentSection]= useState(false)
    const [isLargeScreen] = useMediaQuery("(max-width: 768px)");

    const [transaction_History, setHistory]= useState([]);

    const fetchData =()=>{
          axios.get("https://local-pay.onrender.com/transaction_History")
        .then(res=> setHistory(res.data));
    }
    useEffect(()=>{
        fetchData();
    },[])
    console.log(transaction_History)
    

    return <>
    <HStack justifyContent="space-between" marginRight="50px" marginLeft="50px" h="80px" p={4}>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7urHdOKUxYEvAYMnI6XEyQ1i9Rdr60rOVofJhz4M844mHKK1yUGXf3Ea2Oj2zs-pRVs&usqp=CAU" alt="user Logo" h="100%" _hover={{cursor:"pointer"}}/>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLd63aKSW5aeSlp5Z72J0CgS1gnPSvBEveg&usqp=CAU" alt="notification" h="100%" _hover={{cursor:"pointer"}} borderRadius="50%" />
    </HStack>
    <Box w={isLargeScreen? "80%":"50%"} className={style.balanceBox} >
       <HStack justifyContent="space-evenly" marginTop="20px" >
          <VStack>
             <Text fontSize="30px" fontWeight="700" >Total Balance</Text>
             <Text  fontSize="30px" fontWeight="700" >$2000</Text>
          </VStack>
        <Button fontSize="25px" bg="green.300"><span><Image src="https://w7.pngwing.com/pngs/632/307/png-transparent-paper-planes-send-newsletter-icon-blue-tinker-thumbnail.png" borderRadius="50%" h="30px" marginRight="20px"/></span> Send</Button>
       </HStack>
    </Box>

    <Grid templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']} gap="40px" p={4} margin="50px" padding={4} color="cyan.700" fontSize="25px" >
        <Box className={style.boxStyle}>
            <Center> 
                <Image src="https://e7.pngegg.com/pngimages/933/104/png-clipart-payment-computer-icons-money-credit-card-indian-rupee-sign-web-production-angle-text.png" alt="to-mobile" className={style.imgStyle}/>
            </Center> 
            <Text align="center">To Mobile Number</Text>
        </Box>
        <Box className={style.boxStyle}>
            <Center>
                <Image src="https://w7.pngwing.com/pngs/279/210/png-transparent-wire-transfer-bank-account-payment-money-bank-angle-service-logo.png" alt="teansfer-to-bank" className={style.imgStyle}/>
            </Center> 
            <Text align="center">To Bank</Text>
        </Box>
        <Box className={style.boxStyle}>
            <Center>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGN4mm7JafwUFCf1YBkaJ2A7S-51et6MR-w&usqp=CAU" alt="passbook"marginBottom={4} className={style.imgStyle}/>
            </Center> 
             <Text align="center">Passbook</Text>
        </Box>
        <Box className={style.boxStyle}
        onClick={()=> setExtraPaymentSection(!extraPaymentSection)}>
            <Center>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmgSrHnwPvKhAjRiAI-DNhHlSHHThPoaodm3FF6anW0AIfxFCKHZjJFSzee2RSdu8oO4&usqp=CAU" alt="more" className={style.imgStyle} borderRadius="30%"/>
            </Center> 
            <Text align="center">{extraPaymentSection? "Less":"More"}</Text>
        </Box>
      </Grid>
      {extraPaymentSection && <PaymentSection />}
      <HStack justifyContent="space-between" w="90%" margin="auto">
          <Text fontSize="35px" fontWeight="900">Transaction</Text>
          <Text fontSize="20px"color="blue"> <Link >View All</Link></Text>
      </HStack>
      <Grid templateColumns={['1fr', '1fr', '1fr 1fr']}gap="15px" marginTop={4}>
      {transaction_History && transaction_History?.length>0 && transaction_History.map((item,i)=>{
        return <HStack key={item.id} justifyContent="space-around"w="60%" margin="auto" border="1px" borderRadius="20px"  p={4} fontSize="20px"bg="bisque" marginBottom="20px" gap={4}>
            <Text border="1px solid black" marginLeft={0} borderRadius="50%" w="60px" h="60px" align="center" paddingTop="15px" bg={bgColor[i%bgColor.length]}>{`${item.firstName[0]}${item.lastName[0]}`}</Text>
            <VStack>
                <Text color="blue.400">{item.firstName+" "+ item.lastName}</Text>
                <Text color={item.location=="Sent"? "red":"green"}>{item.location}</Text>
            </VStack>
            <VStack>
                <Text fontWeight="bold">{item.money}</Text>
                <Text>{item.date}</Text>
            </VStack>
        </HStack>
      })}
      </Grid>
      
    </>
}


export {DashBoard}