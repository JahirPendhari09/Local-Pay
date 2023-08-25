import { Grid, HStack, Image, Text } from "@chakra-ui/react"
import { useState, useEffect } from 'react';
import { CSSReset, Box, Button, useMediaQuery } from '@chakra-ui/react';
import { ArrowRightIcon } from "@chakra-ui/icons";

const headData = [
  {
    id: 0,
    title: "View statements and manage financial data consonets",
    text: "Register on Local Pay Account Aggregator now! ",
    btn: "Know More",
    status: false,
    image: "https://www.phonepe.com/webstatic/4735/static/6eba1bff4e20e9bc2aa276c2fe94659f/c608a/hp-banner-aa.png"
  },
  {
    id: 1,
    title: "Local Pay Pulse Free Accept payments for your Onine Business at zero Cost",
    text: "find out how money moves in a country account 140 Crore!",
    btn: "Explore Now",
    status: false,
    image: "https://www.phonepe.com/webstatic/4735/static/6341d1762ac4ed98d04996c9b03b5eb5/eeb1b/hp-banner4wt.png"
  },
  {
    id: 2,
    title: "Recharge , Pay bills and send money safely from Home!",
    text: "Help your family and Friends make safe payments with Local Pay",
    btn: "Get Started",
    status: false,
    image: "https://www.phonepe.com/webstatic/4735/static/6a8e4748cf99b4e497a2d04e8b8389cc/5707d/hp-banner1.png"
  },
]
const Home = () => {
  const [headerData, setCurrData] = useState(headData[0]);
  const [isLargeScreen] = useMediaQuery("(max-width: 768px)");


  useEffect(() => {
    const timer = setTimeout(() => {
      let currData = (headerData.id + 1) % headData.length;
      setCurrData(headData[currData])

    }, 3000);

    return () => clearTimeout(timer);
  });


  const { title, text, btn, image } = headerData


  return <>
    <CSSReset />
    <Box
      padding="20px"
      // display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      display="inline-block"
      _hover={{cursor: "pointer"}}
    >
      <Image
        borderRadius="20px"
        h={isLargeScreen? "350px":"100%"}
        src={image}
        alt={`Local Pay Image`}
      />
      <Box
        position="absolute"
        // bottom="0"
        w={isLargeScreen ? "250px" : "400px"}
        left="10%"
        top="10%"
        color="white"
        padding="1rem"
      >
        <Text fontSize={isLargeScreen ? "25px" : "30px"} marginBottom="20px" color={headerData.id === 2 ? "green.400" : "blue.100"} fontWeight="700">{title}</Text>
        <Text marginBottom={isLargeScreen ? "10px" : "20px"} color={headerData.id === 2 ? "green.400" : "blue.100"}>{text}</Text>
        <Button color={headerData.id === 2 ? "green.400" : "red"}  >{btn}</Button>
      </Box>
    </Box>
    <HStack justifyContent="center" paddingBottom="10px">
      {headData.map((item, i) => {
        return <p style={{ borderRadius: "50%", width: "15px", height: "15px", backgroundColor: item.id === headerData.id ? "blue" : "lightGray" }}></p>
      })}
    </HStack>
    <Grid templateColumns={isLargeScreen ? "1fr" : "repeat(2, 1fr)"} gap={6} marginLeft="50px" marginRight="50px"> 

      <Box boxShadow='outline' rounded="md" p={4} h="300px" margin={10} bgColor="lightblue" _hover={{cursor: "pointer", boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}  >
        <h1 style={{ fontSize: "30px", color: "darkblue" }}>Insurance made</h1>
        <h1 style={{ fontSize: "30px", color: "darkblue" }}>easy</h1>
        <p style={{ paddingTop: "20px", fontSize: "1rem" }}>Secure your life,health,</p>
        <p>vehicles and more</p>
        <Box marginTop={5}>
          <Button marginRight={3}>Learn More</Button> <ArrowRightIcon />
        </Box>
      </Box>

      <Box boxShadow='outline' rounded="md" p={4} h="300px" margin={10} bg="green.200" _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
        <h1 style={{ fontSize: "30px", color: "darkblue" }}>The Best in Mutual </h1>
        <h1 style={{ fontSize: "30px", color: "darkblue" }}>Funds Investments</h1>
        <p style={{ paddingTop: "20px", fontSize: "1rem" }}>Invest your wealth and achieve</p>
        <p>your financial goals!</p>
        <Box marginTop={5}>
          <Button marginRight={3}>Explore</Button> <ArrowRightIcon />
        </Box>
      </Box>
    </Grid>
    <br />
    <Box marginLeft={isLargeScreen? "50px":"100px"} w={isLargeScreen? "350px":"600px"}>
      <Text fontSize="40px" fontWeight="600" color="green">Simple,Fast & Secure</Text>
      <br />
      <Text fontSize="25px">One app for all things money.</Text>
      <br />
      <Text>Pay bills, recharge, send money, buy gold, invest and shop at your favourite stores.</Text>
      <br />
      <hr/>
      <br />
      <Text fontSize="25px">Pay whenever you like, wherever you like.</Text>
      <br />
      <Text>Choose from options like UPI, the PhonePe wallet or your Debit and Credit Card.</Text>
      <br />
      <hr />
      <br />
      <Text fontSize="25px">Find all your favourite apps on PhonePe Switch.</Text>
      <br />
      <Text>Book flights, order food or buy groceries. Use all your favourite apps without downloading them.</Text>
      <br />
    </Box>
  </>


}
export { Home }