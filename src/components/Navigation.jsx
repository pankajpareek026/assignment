
import { AppBar, Tabs, Toolbar, useMediaQuery, Typography, useTheme, Button } from '@mui/material'
import React, { useState } from 'react'
import Logo from './Logo'
import Btn from './Btn'
import DrawerComp from './DrawerComp'
import { Link } from 'react-router-dom'

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
    fontSize: "x-small"
}


const Navigation = () => {
    const [activeTab, setActiveTab] = useState(0)
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    const pages = ["Home", "Demeter", "Gauge", "Stake", "Swap", "More"]
    console.log(isMatch)
    return (
        <React.Fragment>
            <AppBar sx={{ backgroundColor: "white", padding: "0", boxShadow: "none", position: "sticky" }}>
                <Toolbar >
                    <Logo styles={logoStyles} />
                    {
                        isMatch ? (<>
                            <DrawerComp />
                        </>
                        ) :
                            (
                                <>

                                    {
                                        pages.map((page, index) => {
                                            return (

                                                <Button color="black" key={index} component={Link} to={`/${(page).toLowerCase()}`}>
                                                    {page}
                                                </Button>
                                            )
                                        })
                                    }


                                    <Btn styles={buttonStyles} buttonType={"contained"} text={"Connect to wallet"} />
                                </>
                            )
                    }

                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}

export default Navigation

