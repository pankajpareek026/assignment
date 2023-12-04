import { Box, Button, Container, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import SwapVertIcon from '@mui/icons-material/SwapVert';
import CoinListContainer from './CoinListContainer.jsx';
import { Settings } from '@mui/icons-material';
import Btn from './Btn';

const buttonStyles = {
  backgroundColor: "#F4F6F8",
  color: "black",
  fontSize: "medium",
  textTransform: "none",
  borderRadius: "50px",
  marginLeft: "3%",
  fontSize: "large",
  fontWeight: 700,
  border: "1px solid grey",
}

function Swap() {
  return (
    <Container maxWidth="sm" sx={{ marginTop: "2%" }}>

      <Box width={1} padding={1} mt={5} mb={10} height={"auto"} sx={{ marginTop: "22px", bgcolor: '#F4F6F8', borderRadius: "12px", boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.30)" }} >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography mb={2} fontSize={"x-large"}>Swap</Typography>
          <Settings />
        </Stack>

        <Typography fontSize={"small"}>pay</Typography>
        <Stack padding={2} direction={"column"} spacing={1}  >




          <CoinListContainer balance={0} secondItemValue={"Get USDs"} inputLabel="Enter amount" isSecondItem={true} />

          <Typography textAlign={"center"} ><SwapVertIcon /></Typography>


          <CoinListContainer balance={0} isSecondItem={false} inputLabel={0} />
          <Btn styles={buttonStyles} text={"Swap"} />
        </Stack>
      </Box>
    </Container>
  )
}

export default Swap