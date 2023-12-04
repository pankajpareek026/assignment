import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import FlareIcon from '@mui/icons-material/Flare';


import LaunchIcon from '@mui/icons-material/Launch';
import { Stack } from '@mui/material';
import Btn from './Btn';


// stype for logo component
const pages = ["Home", "Demeter", "Gauge", "Stake", "Swap", "More"]
const styles = {
  padding: "5px 9px",
  height: "auto",
  width: "auto",
  borderRadius: "100%",
  border: "box"
}

const buttonStyles = {
  backgroundColor: "#31c1bf",
  color: "#fffff",
  textTransform: "none",
  borderRadius: "50px",
  marginLeft: "3%",
  fontSize: "x-small"
}
export default function Navbar() {
  return (
    <Box sx={{ width: "100%", top: 0 }} >
      <AppBar sx={{ backgroundColor: "white", padding: "0", boxShadow: "none" }} position="static">
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Logo styles={styles} />
          {
            pages.map((item, index) => {
              return <Button key={index} component={Link} to={`${item}`} variant="text"
                sx={{
                  color: "black",
                  marginLeft: "auto",
                  fontWeight: 750,
                  textTransform: "none",
                  fontSize: "medium"
                }}>{item}</Button>
            })
          }

          <Btn styles={buttonStyles} buttonType={"contained"} text={"Buy SPA & USDs"} />

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
              ...styles,
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

          <Btn styles={buttonStyles} buttonType={"contained"} text={"Connect to wallet"} />
          <IconButton sx={{
            borderRadius: "50px",
            marginLeft: "12px",
            backgroundColor: "white",
            height: "30px",
            width: "30px",
            boxShadow: "2px 2px 2px 1px gray ,-2px -2px 1px 0px gray "

          }} >
            <FlareIcon sx={{ padding: "2px" }} color='black' />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
