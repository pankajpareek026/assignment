import React from 'react'
import { useMediaQuery,useTheme, Stack, Box, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import medium from '../assets/medium.svg'
import discord from '../assets/discord.svg'
import bridge from '../assets/bridge.png'
import swap from '../assets/swap.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LaunchIcon from '@mui/icons-material/Launch';


import Logo from './Logo'
import Btn from './Btn'
import FooterSection from './FooterSection';
import { ArrowRightAlt, ArrowRightSharp } from '@mui/icons-material';

const buttonStyles = {
  backgroundColor: "#F4F6F8",
  color: "#000000",
  fontSize: "medium",
  textTransform: "none",
  borderRadius: "90px",
  marginLeft: "5%",
  fontSize: "medium",
  border: "1px solid #E7ECEF",
  padding: "9.4px 16.56px 12.2px 16.8px",
  display: "flex",
  alignItems: "flex-start"

}
const logoStyles = {
  height: "15px",
  width: "15px",
  backgroundColor: "black",
  borderRadius: "100px",
  padding: "5px"

}
const Footer = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Box width={"sm"}
      sx={{
        borderTop: "1px solid #000",
        marginTop: "auto",
        backgroundColor: "#F4F6F8",
        p: 4,
      }}
      component="footer"
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"}>
          <Logo />
          <Btn text={"Forum"} styles={buttonStyles} buttonType={"outlined"} />
          <Btn text={"Snapshot"} styles={buttonStyles} buttonType={"outlined"} />
        </Stack>

        <Stack direction={"row"} flexWrap={"wrap"} spacing={1.5}>
          <TelegramIcon />
          <GitHubIcon />
          <TwitterIcon />
          <img style={{ height: "1.5em", width: "1.5em" }} src={medium} alt="" />
          <img style={{ height: "1.5em", width: "1.5em" }} src={discord} alt="" />
        </Stack>
      </Stack>

      <Stack
        direction={smallScreen?"column":"row"}
        sx={
          {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10%"
          }}  >

        <FooterSection
          text={"USDs Arbitrum"}
          image={<Logo styles={logoStyles} />}
          icon1={<ContentCopyIcon fontSize='x-small' />}
          icon2={<LaunchIcon fontSize="x-small" />}
        />

        <FooterSection
          text={"SPA Arbitrum"}
          image={<Logo styles={logoStyles} />}
          icon1={<ContentCopyIcon fontSize='x-small' />}
          icon2={<LaunchIcon fontSize='x-small' />}
        />

        <FooterSection
          text={"vSPA Arbitrum"}
          image={<Logo styles={logoStyles} />}
          icon1={<ContentCopyIcon fontSize='x-small'/>}
          icon2={<LaunchIcon fontSize='x-small' />}
        />

        <Stack direction={"column"}>
          <FooterSection
            text={"vSPA Arbitrum"}
            image={<Logo styles={logoStyles} />}
            icon1={<ContentCopyIcon fontSize='x-small' />}
            icon2={<LaunchIcon fontSize='x-small' />}
          />

          <Stack direction={"column"} spacing={2} mt={5}>
            <Box display={"flex"} gap={1}>

              <img src={swap}
                style={{
                  height: "20px",
                  width: "20px"
                }} alt="Swap"
              />

              <Typography fontSize={"medium"} >SPA <ArrowRightAlt fontSize='medium' /> wSPA </Typography>
            </Box>
            <Box display={"flex"} gap={1}>
              <img src={bridge} style={{ height: "20px", width: "20px" }} alt="Swap" />
              <Typography fontSize={"medium"} >Sperax - Arbitrum Bridge </Typography>
            </Box>

          </Stack>
        </Stack>




      </Stack>
    </Box>
  )
}

export default Footer