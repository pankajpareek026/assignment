import React from 'react'
import { Typography, Stack } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from './Logo';

const logoStyles = {
    padding: "5px 9px",
    height: "auto",
    width: "auto",
    borderRadius: "100%",
    border: "box"
}

const SpaBalanceComp = () => {
  return (
    <Stack spacing={1}
    direction={'row'}
    justifyContent={"enter"}
    boxShadow={1}
    display={"inline-flex"}
    sx={{
        marginLeft: "3%",
        padding: "0px 3px",
        borderRadius: "20px",
        width: "auto",
        backgroundColor: "#ECEBEC"
    }}  >

    <Logo styles={{
        ...logoStyles,
        height: "15px",
        width: "15px",
        padding: "2px",
        borderRadius: "100%",
        margin: "auto", backgroundColor: "black"
    }}
    />
    <Typography sx={{ fontSize: "large", color: "black" }} >0</Typography>
    <KeyboardArrowDownIcon sx={{ color: "black" }} />

</Stack>
  )
}

export default SpaBalanceComp