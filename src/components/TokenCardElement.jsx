import React from 'react'
 import { Box,Typography } from '@mui/material'
const TokenCardElement = ({firstItem,secondItem}) => {
  return (
    <Box display={"grid"} spacing={0}>
            <Typography sx={{ marginLeft: "5px" }}  >{firstItem}</Typography>
            <Typography sx={{ marginLeft: "5px" }}   >{secondItem}</Typography>
          </Box>
  )
}

export default TokenCardElement