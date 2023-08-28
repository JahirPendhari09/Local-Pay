import React, {useContext, useState} from 'react';
import axios from 'axios';
import { Button,Box, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import style from "../Styles/login.module.css"
import { AuthContext } from "../ContexProvider/AuthcontextProvider";
import LoadingSkeleton from "../Component/LoadingSkeleton"
const accountInital={
    accountH_Name:"",
    account_No:"",
    ifsc:"",
    balance:""
}
const AddBank = () => {
    const [accountInfo, setAccountInfo] = useState(accountInital);
    const { id,login } = useContext(AuthContext);
    const [loading, setLoading]= useState(false);
    const [gotoLogin, setGotoLogin]= useState(false);
    const [storeData , setStoreData]= useState([])


    const handleChange=(e)=>{
		e.preventDefault();
		setAccountInfo({...accountInfo, [e.target.name]:e.target.value})
	}
  
    const handleSubmit=()=>{
        setLoading(true)
          axios({
            url:`https://local-pay.onrender.com/users/${id}`,
            method:"patch",
            data:accountInfo
          }).then(res =>{ 
            setStoreData(res.data)
            setLoading(false); 
            setGotoLogin(true)
          })
      }

      if(gotoLogin && storeData)
      {
        return login(storeData)
      }
      if(loading)
      {
          return <LoadingSkeleton/>
      }

      const {accountH_Name,account_No, ifsc,balance}=accountInfo
    return (
     <Box p="50px" bg="gray.400">
         <form onSubmit={handleSubmit}> 
        <VStack spacing={4} h="450px" bg="white" className={style.mainBox}>
           <FormControl>
             <FormLabel>Account Holder Name</FormLabel>
             <Input
               type="text"
               name="accountH_Name"
               value={accountH_Name}
               onChange={handleChange}
              />
            </FormControl>
            <FormControl >
             <FormLabel>Account Number</FormLabel>
             <Input
               type="number"
               name="account_No"
               value={account_No}
               onChange={handleChange}
             />
            </FormControl>

            <FormControl>
              <FormLabel>IFSC Code</FormLabel>
              <Input
                 type="text"
                 name="ifsc"
                 value={ifsc}
                 onChange={handleChange}
               />
            </FormControl>
           
            <FormControl>
               <FormLabel>Balance</FormLabel>
               <Input
                 type="text"
                 name="balance"
                 value={balance}
                 onChange={ handleChange}
                />
            </FormControl>

            <Button type="submit" colorScheme="blue">Add Account</Button>
        </VStack>
      </form>
     </Box>
    );
  };

  export {AddBank}
  