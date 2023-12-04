import { Box, Typography } from '@mui/material'
import React from 'react'

const ErrorCard = ({errorMessage}) => {
  return (
    <Box width={1} mt={5}   sx={{ bgcolor: '#F4F6F8'}} borderRadius={"12px"} boxShadow={"0px 2px 5px 0px rgba(0, 0, 0, 0.30)"}  height={"60px"} >
<Typography  fontWeight={400} p={2} textAlign={"center"} fontSize={"18px"}> {errorMessage} </Typography>


    </Box>
    
  )
}

export default ErrorCard