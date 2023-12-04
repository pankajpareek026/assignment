import React, { useState } from 'react'
import  Button  from '@mui/material/Button';
import {  TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Container, Typography } from '@mui/material';
import TransferToken from './TransferToken';
import ErrorCard from './ErrorCard';
import TokenCard from './TokenCard';

// Address : 0x71C7656EC7ab88b098defB751B7401B5f6d8976F
const TokenFetch = () => {
 
  const[ethAddress,setEthAddress]=useState("")
  const[error,setError]=useState(false)
  const[errorMessage,setErrorMessage]=useState(null)
  const[erc20Tokens,setErc20Tokens]=useState([])
  const[loading,setLoading]=useState(false)
  const [reciepentEhtAddress,setReciepentEhtAddress]=useState("")
  const [invalidRecipientAddress,setInvalidRecipientAddress]=useState(false)
  const [tokenAmount,setTokenAmount]=useState(0)
  const[tokenAmoutError,setTokenAmountError]=useState(false)

  const isEthAddress=(address)=>
  {
    const firstChar=address.charAt(0);
    const secondChar=address.charAt(1);

    if(firstChar!=0||secondChar!="x"||address.length!=42){
      return false
          }
          else{
            return true
          }
  }


  const checkTockenBalanceHandler=async()=>{
    const validAddress=isEthAddress(ethAddress)
    console.log("validAddress :",validAddress)
    if(!ethAddress)
    {
setErrorMessage("Ethereum Address is Required ")
setError(true)
return

    }
  
    else if(!validAddress){

setErrorMessage("invalid Ethereum address !")
setError(true)
return

    }else{

      setErrorMessage("")
      setError(false)

      try {
        setLoading(true)
        let result=await fetch(`https://api.ethplorer.io/getAddressInfo/${ethAddress}?apiKey=freekey`)
result=await result.json()
console.log(result)
setError(false)
if(result.error)
{
  setError(true)
  setErrorMessage(result.error.message)
}
setErc20Tokens(result)
setLoading(false)
      } catch (error) {
        if(error)
        {
          setError(true)
          setErrorMessage(error.message)
          console.log("error :",error)
          setLoading(false)
        }
      }
    }

    

  }

  const TransferTokenHandler=()=>{
    const validAddress=isEthAddress(reciepentEhtAddress)
    console.log("recepent :",validAddress)
    if(reciepentEhtAddress==""&&tokenAmount<=0)
    {
setInvalidRecipientAddress(true)
setTokenAmountError(true)
    }
   else if(!validAddress || !reciepentEhtAddress)
    {
      setInvalidRecipientAddress(true)
    }
    else{
    setInvalidRecipientAddress(false)
      alert("token transfer successfull !")
    }
  }
  
  return (
  <Container maxWidth="sm"  >

<Typography variant='h4' fontSize={"32px"} fontWeight={600}  textAlign={"center"} marginTop={7} sx={{inlineHight:"38px"}} >ERC20 Token Balance</Typography>

<Box width={1} mt={5} sx={{ marginTop:"22px",bgcolor: '#F4F6F8',borderRadius:"12px",boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.30)"}} >
<Typography  pt={2} mb={1} pl={2} ml={"5px"}  sx={{ fontSize:"19px",fontSrin:0,fontWeight:600 }}>Ethereum address</Typography>
<TextField  onChange={(e)=>setEthAddress(e.target.value)} ml={5}  sx={{width:"90%",marginLeft:"3.5%" ,borderRadius:"20px"}}  InputProps={{
    style: {
        borderRadius: "12px",
        background: "#FFF",
        height:"45px",
        alignItems:"center"
    }
  }} label="Ethereum Address"  />

<Button  onClick={checkTockenBalanceHandler} disabled={loading} startIcon={loading&&<CircularProgress  /> } 
sx={{
marginLeft:"3.7%",
backgroundColor:"#31c1bf",
marginTop:"9px" ,
marginBottom:"19px",
borderRadius:"25px",
padding:"20px 12px",
fontSize:"large",
height:"8px",
textTransform:"none",
  }} variant="contained" >
  {loading?"Fetching": "submit"}
</Button>
</Box >

{error&&<ErrorCard errorMessage={"Invalid Ethereum Address"}/>}

{/* to display Erc20 tokens list */}
{
 erc20Tokens.ETH&& <>
 <Container width={1}  maxWidth="sm"   sx={{
     marginTop:"5px",
     bgcolor: '#f8fafa',
     padding:"2px"
     }}
      borderRadius={5} 
      boxShadow={10}  >


 {erc20Tokens?.ETH?.balance&&<Box width={"sm"}  mt={2} paddingBlockStart={2}  sx={{ bgcolor: 'grey'}} borderRadius={"5px"} boxShadow={5} mb={"5px"}  height={"70"} >
 <Box mt={2}  bgcolor={"white"} borderRadius={"0px 0px 5px 5px"} >

  <Typography variant='h6' align="center" padding={1} >
ETH Balance : {erc20Tokens?.ETH?.balance} ETH
  </Typography>
 </Box>
 </Box>}


<Box overflow={"scroll"} height={200} p={1.5}>
{
erc20Tokens?.tokens ?  
erc20Tokens.tokens.map((item,index)=>{
    // console.log(item);
    return(
     <TokenCard key={item.tokenInfo.symbol}
      name={item.tokenInfo.name} balance={item.balance} symbol={item.tokenInfo.symbol} logo={item.tokenInfo.image} price={item.tokenInfo.price.rate}/>
    //  name,balance,symbol,price
    )
  }): <ErrorCard errorMessage={"Other Token Balance : 0"}/>
 }
</Box>
 </Container>
 </>
}

<TransferToken/>
  </Container>
  )
}





export default TokenFetch