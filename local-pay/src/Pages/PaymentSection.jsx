import { Grid,Box, Image, Text, Center} from "@chakra-ui/react"
import style from "../Styles/payment.module.css"

let boxData=[
  {
    id:0,
    url:"https://www.seekpng.com/png/detail/271-2711609_mobile-phone-recharge-mobile-recharge-icon-png.png",
    text:"Mobile Recharge"
  },
  {
    id:1,
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuMwqQTicyvZ1nWqGKCfzh5L5niGCO0LDqg&usqp=CAU",
    text:"Electricity"
  },
  {
    id:2,
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wWiaiBsxhCBypnVyUksjVb66mip6ajWr51Lp9GrJiZZ5RH3kBsMZG45e1m7nw7S2Ils&usqp=CAU",
    text:"Cable/DTH"
  },
  {
    id:3,
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQvG4uRHB2hicR_GNlqv9_rdqIkP2H5B2dGuNoyIiNg8JdRUz8hIphf8NIiBVcmd7mRIs&usqp=CAU",
    text:"Cylinder"
  },
  {
    id:4,
    url:"https://w7.pngwing.com/pngs/279/210/png-transparent-wire-transfer-bank-account-payment-money-bank-angle-service-logo.png",
    text:"To Bank"
  },
   {
    id:5,
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6SUdnBppVXH8wLfk4kXPjsAV_VZf8-RmPQ&usqp=CAU",
    text:"Credit Bill"
  },
  {
    id:6,
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLLNUaE0MkNAi4am-R9jSNX9XXB1BwdM9re2k8vpKxAbi4JUUgzwnLArKUlULSelKiYU&usqp=CAU",
    text:"Broadband"
  },
  {
    id:7,
    url:"https://static.vecteezy.com/system/resources/previews/009/337/383/original/donate-and-charity-flat-color-icon-helping-hand-money-png.png",
    text:"Donate"
  },
]
const PaymentSection =()=>{

    return <>
        <Grid templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']} gap="40px" p={4} margin="50px" padding={4} color="cyan.700" fontSize="25px" >
          {boxData.map((item)=>{
            return <Box className={style.boxStyle} key={item.id}>
              <Center>
                <Image src={item.url} alt="logo" className={style.imgStyle} />
              </Center>
              <Text align="center">{item.text}</Text>
             </Box>
          })}
      </Grid>

    </>
}

export {PaymentSection}