import { HStack, Image,Text } from "@chakra-ui/react"
import  { useState, useEffect } from 'react';
import {CSSReset, Box,Button } from '@chakra-ui/react';

const headData=[
  {
    id:0,
   title:"View statements and manage financial data consonets",
   text:"Register on Local Pay Account Aggregator now! ",
   btn:"Know More",
   status:false,
   image:"https://www.phonepe.com/webstatic/4735/static/6eba1bff4e20e9bc2aa276c2fe94659f/c608a/hp-banner-aa.png"
  },
  {
    id:1,
    title:"Local Pay Pulse Free Accept payments for your Onine Business at zero Cost",
    text:"find out how money moves in a country account 140 Crore! Now updated with the latest data for Q2 2023 (Apr-Jan)",
    btn:"Explore Now",
    status:false,
    image:"https://www.phonepe.com/webstatic/4735/static/6341d1762ac4ed98d04996c9b03b5eb5/eeb1b/hp-banner4wt.png"
   },
   {
    id:2,
    title:"Recharge , Pay bills and send money safely from Home!",
    text:"Help your family and Friends make safe payments with Local Pay",
    btn:"Get Started",
    status:false,
    image:"https://www.phonepe.com/webstatic/4735/static/6a8e4748cf99b4e497a2d04e8b8389cc/5707d/hp-banner1.png"
   },
]
const Home = () => {
    const [headerData, setCurrData] = useState(headData[0]);
    

    useEffect(() => {
        const timer = setTimeout(() => {
          let currData =(headerData.id + 1)%headData.length;
          setCurrData(headData[currData])
        
        }, 3000);
    
        return () => clearTimeout(timer);
      });
   

    const { title,text, btn, image}= headerData
  

    return <>
      <CSSReset />
      <Box
        padding="20px"
        // display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        display="inline-block"
      >
        <Image
        borderRadius="20px"
          src={image}
          alt={`Local Pay Image`}
        />
        <Box 
          position="absolute"
          // bottom="0"
          w="400px"
          left="10%"
          top="10%"
          color="white"
          padding="1rem"
        >
          <Text fontSize="30px" marginBottom="20px" color={headerData.id===2? "green.400":"blue.100"} fontWeight="700">{title}</Text>
          <Text marginBottom="20px" color={headerData.id===2? "green.400":"blue.100"}>{text}</Text>
          <Button color={headerData.id===2? "green.400":"red"}  >{btn}</Button>
        </Box>
      </Box>
      <HStack justifyContent="center" paddingBottom="10px">
      {headData.map((item,i)=>{
        return <p style={{ borderRadius:"50%" , width:"15px", height:"15px",backgroundColor:item.id===headerData.id? "blue":"lightGray"}}></p>
      })}
      </HStack>
    </>
}
export { Home }