
import { AppBar, Tabs, Toolbar, useMediaQuery, IconButton, useTheme, Button, } from '@mui/material'
import React, { useState } from 'react'
import Logo from './Logo'
import Btn from './Btn'
import DrawerComp from './DrawerComp'
import { Link } from 'react-router-dom'
import FlareIcon from '@mui/icons-material/Flare';
import SpaBalanceComp from './SpaBalanceComp'

const logoStyles = {
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
    marginLeft: "auto",
    fontSize: "x-small",

}


const Navigation = () => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    const pages = ["Home", "Demeter", "Gauge", "Stake", "Swap", "More"]
    console.log(isMatch)
    return (
        <React.Fragment>
            <AppBar sx={{ backgroundColor: "white", padding: "0", boxShadow: "none", position: "sticky" }}>
                <Toolbar  >
                    <Logo styles={logoStyles} />
                    {
                        isMatch ? (<>
                          
                            <Btn styles={buttonStyles} buttonType={"contained"} text={"Connect Wallet"} />
                            <DrawerComp />
                        </>
                        ) :
                            (
                                <>

                                    {
                                        pages.map((page, index) => {
                                            return (

                                                <Button key={index} sx={{ color: "black", textTransform: "capitalize", marginLeft: "auto" }} component={Link} to={`/${(page).toLowerCase()}`}>
                                                    {page}
                                                </Button>
                                            )
                                        })
                                    }




                                    <Btn styles={buttonStyles} buttonType={"contained"} text={"Buy SPA & USDs"} />
                                    <SpaBalanceComp />
                                    <Btn styles={buttonStyles} buttonType={"contained"} text={"Connect to wallet"} />

                                    <IconButton sx={{
                                        borderRadius: "50px",
                                        marginLeft: "auto",
                                        backgroundColor: "white",
                                        height: "30px",
                                        width: "30px",
                                        boxShadow: "2px 2px 2px 1px gray ,-2px -2px 1px 0px gray "

                                    }} >
                                        <FlareIcon sx={{ padding: "2px" }} color='black' />
                                    </IconButton>
                                </>
                            )
                    }

                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}

export default Navigation

