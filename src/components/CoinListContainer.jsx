import { Stack, Typography,TextField ,Box } from '@mui/material'
import React from 'react'
import CoinList from './CoinList'

const CoinListContainer = ({balance,secondItemValue,isSecondItem, inputLabel}) => {
  return (
    <Box bgcolor={"white"}padding={0} height={"90px"} p={.5} boxShadow={5} borderRadius={"12px"}>

      <Stack  direction={"row"} p={"0px"} alignContent={"right"}>
      <Typography align='right' marginRight={1.5} fontSize={"small"} display={"block"} marginLeft={"auto"} textAlign={"right"}> Balance :{`($ ${balance})`}   </Typography> 
      {isSecondItem&&<Typography fontSize={"small"} padding={"2px 7px"} fontWeight={600} color={"#31c1bf"} >{secondItemValue}</Typography>}
      </Stack>

         <Stack direction={"row"}  spacing={25}>
    <CoinList/>
    
            <TextField   sx={{ height:"40px",boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } ,"& .MuiInputBase-root": {
                width:"80%",
        height: 40
    }}}
            inputProps={{
              style:{
                fontWeight:500,
                color:"black",
                fontSize:"xx-large",
                outline:"none",
                border:"none",
                height:"50px"
              }
            }}
            label={inputLabel}/>
            </Stack>
    </Box>
  )
}

export default CoinListContainer