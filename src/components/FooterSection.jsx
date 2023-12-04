import React from 'react'
import { Box ,Typography} from '@mui/material'
const FooterSection = ({icon1,text,icon2,image}) => {
  return (
    <Box display={"flex"} maxWidth={"20%"} gap={1} mt={5} padding={0} >
    {image} <Typography fontSize={"small"} >{text}</Typography>
{icon1}
   {icon2}
     </Box>
    
  )
}

export default FooterSection