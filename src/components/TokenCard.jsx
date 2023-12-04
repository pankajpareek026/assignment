import React, { useState } from 'react'
import humanFormat from 'human-format'
import { Avatar, Box, Container, Stack, Typography } from '@mui/material'
import TokenCardElement from './TokenCardElement';
import { numberFomator } from '../numberFormater';
const TokenCard = ({ name, balance, symbol, price, logo }) => {
  var newNumberFormat = humanFormat.Scale.create(["", "K", "M", "B", "T", "QR", "QI"], 1000);

  console.log("logo :", logo)

  return (
    // card body 
    <Stack spacing={0.1} boxShadow={5} borderRadius={3} mt={2} p={1} >

      {/* stack to devide image field and text fiels in two part  */}
      <Stack direction={"row"} spacing={1} justifyContent={"space-between"} >
        {/* box to hold image /Logo */}
        <Box direction={"column"}><Avatar sx={{ marginLeft: "5px" }} alt={name} src={logo} />
        </Box>
        {/* stack to devide remaning space evenly between text stacks */}
        <Stack width={"auto"} direction="row"
          // justifyContent="space-between"
          alignItems="space-between"
          spacing={12}
        >
          <TokenCardElement firstItem={symbol} secondItem={name} />
          <TokenCardElement
            firstItem={numberFomator(balance,3)}
            secondItem={(price * balance) > 0 ? ` $ ${parseFloat(price).toFixed(4)}` : " $ 0.00"}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default TokenCard