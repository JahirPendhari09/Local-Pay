import { Grid,Box, Image, Text, Center } from "@chakra-ui/react"
const PaymentSection =()=>{
    return <>
        <Grid templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']} gap="40px" p={4} margin="50px" padding={4} color="cyan.700" fontSize="25px" >
        <Box border="2px solid green" padding={4} borderRadius="15px" _hover={{bg:"lightblue", cursor: "pointer",color:"red",boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
        <Center> <Image src="https://www.seekpng.com/png/detail/271-2711609_mobile-phone-recharge-mobile-recharge-icon-png.png" alt="Image 1" h="100px"w="100px" marginBottom={4}/> </Center> 
          <Text align="center">Mobile Recharge</Text>
        </Box>
        <Box border="2px solid blue" padding={4} borderRadius="15px" _hover={{bg:"lightblue",cursor: "pointer",color:"red",boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
         <Center> <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuMwqQTicyvZ1nWqGKCfzh5L5niGCO0LDqg&usqp=CAU" alt="Image 2" h="100px"w="100px" marginBottom={4}/></Center> 
          <Text align="center">Electricity</Text>
        </Box>
        <Box border="2px solid green" padding={4} borderRadius="15px" _hover={{bg:"lightblue",cursor: "pointer",color:"red",boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
        <Center><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wWiaiBsxhCBypnVyUksjVb66mip6ajWr51Lp9GrJiZZ5RH3kBsMZG45e1m7nw7S2Ils&usqp=CAU" alt="Image 3" h="100px"w="100px" marginBottom={4}/></Center> 
          <Text align="center">Cable/DTH</Text>
        </Box>
        <Box border="2px solid blue" padding={4} borderRadius="15px" _hover={{bg:"lightblue",cursor: "pointer",color:"red",boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
        <Center><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQvG4uRHB2hicR_GNlqv9_rdqIkP2H5B2dGuNoyIiNg8JdRUz8hIphf8NIiBVcmd7mRIs&usqp=CAU" alt="Image 1" h="100px"w="100px" marginBottom={4}/></Center> 
          <Text align="center">Cylinder</Text>
        </Box>
        <Box border="2px solid green" borderRadius="15px" padding={4} _hover={{bg:"lightblue",cursor: "pointer",color:"red",boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
        <Center> <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6SUdnBppVXH8wLfk4kXPjsAV_VZf8-RmPQ&usqp=CAU" alt="Image 2" h="100px"w="100px" marginBottom={4}/></Center> 
          <Text align="center">Credit Bill</Text>
        </Box>
        <Box border="2px solid blue" padding={4} borderRadius="15px" _hover={{bg:"lightblue",cursor: "pointer",color:"red",boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
        <Center><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLLNUaE0MkNAi4am-R9jSNX9XXB1BwdM9re2k8vpKxAbi4JUUgzwnLArKUlULSelKiYU&usqp=CAU" alt="Image 3" h="100px"w="100px" marginBottom={4}/></Center> 
          <Text align="center">Broadband</Text>
        </Box>
      </Grid>

    </>
}

export {PaymentSection}