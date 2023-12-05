import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';
function TransferToken({ isEthAddress }) {

  const [loading, setLoadig] = useState(false)
  const [reciepentEhtAddress, setReciepentEhtAddress] = useState("")
  const [invalidRecipientAddress, setInvalidRecipientAddress] = useState(false)
  const [tokenAmount, setTokenAmount] = useState(0)
  const [tokenAmoutError, setTokenAmountError] = useState(false)

  const TransferTokenHandler = () => {

    const validAddress = isEthAddress(reciepentEhtAddress)
    console.log("valid address :", validAddress)
    if (reciepentEhtAddress == "" && tokenAmount <= 0) {
      setError(true)
      setInvalidRecipientAddress(true)
      setTokenAmountError(true)
      return
    }
    else if (!validAddress || !reciepentEhtAddress) {
      setError(true)
      setInvalidRecipientAddress(true)
      return
    }
    else if (tokenAmount <= 0) {
      setTokenAmountError(true)
      return
    }
    else {
      setInvalidRecipientAddress(false)
      setLoadig(true)
      setTimeout(() => {
        setLoadig(false)
        alert("token transfer successfull !")
      }, 3000)

    }
  }
  return (
    <>
      <Typography variant='h4' fontSize={"32px"} fontWeight={600} textAlign={"center"} mt={"60px"}>Transfer ERC20 Tokens</Typography>
      {/* Transfer tokens container */}
      <Box width={1} mt={2} sx={{ marginTop: "22px", bgcolor: '#F4F6F8', borderRadius: "12px", boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.30)" }} borderRadius={5} boxShadow={5} mb={7} height={"auto"} >

        <Typography pt={2} mb={1} pl={2} ml={"5px"} sx={{ fontSize: "19px", fontSrin: 0, fontWeight: 600 }}>Ethereum address</Typography>
        <TextField
          onChange={(e) => setReciepentEhtAddress(e.target.value)}
          ml={5}
          sx={{ width: "90%", marginLeft: "3.5%", borderRadius: "20px" }}
          InputProps={{
            style: {
              borderRadius: "12px",
              background: "#FFF",
              height: "45px",
              alignItems: "center",
            }
          }}
          label="Ethereum Address"
        />
        {invalidRecipientAddress && <Typography mb={1} pl={2} color={"red"} sx={{ fontSize: 'h6.fontSize' }}>Invalid ETH address</Typography>}

        <Typography pt={2} mb={1} pl={2} ml={"5px"} sx={{ fontSize: "19px", fontSrin: 0, fontWeight: 600 }}>Token Amount</Typography>
        <TextField
          autoFocus={tokenAmoutError}
          onChange={(e) => setTokenAmount(e.target.value)}
          ml={5}
          sx={{ width: "90%", marginLeft: "3.5%", borderRadius: "20px" }}
          InputProps={{
            style: {
              borderRadius: "12px",
              background: "#FFF",
              height: "45px",
              alignItems: "center"
            }
          }}
          label="Token Amount"
        />
        {(tokenAmoutError && tokenAmount <= 0) && <Typography mb={1} pl={2} color={"red"} sx={{ fontSize: 'h6.fontSize' }}>Amount should be greater than 0</Typography>}

        <Button disabled={loading} startIcon={loading && <CircularProgress />}
          onClick={TransferTokenHandler}
          sx={{
            marginLeft: "3.5%",
            backgroundColor: "#31c1bf",
            marginTop: "9px",
            marginBottom: "19px",
            borderRadius: "25px",
            padding: "20px 12px",
            fontSize: "large",
            height: "8px",
            textTransform: "none"
          }}
          variant="contained"
        >
          {loading ? "Transfer in Progress" : "Transfer"}
        </Button>
      </Box>
    </>

  )
}

export default TransferToken