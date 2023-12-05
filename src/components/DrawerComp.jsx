import { Menu } from '@mui/icons-material';
import React, { useState } from 'react'
import { Drawer, Button, ListItemButton, Divider, List, IconButton } from '@mui/material'
import { Link } from 'react-router-dom';
import Logo from './Logo';

// style for logo component
const logoStyles = {
    padding: "5px 9px",
    height: "auto",
    width: "auto",
    borderRadius: "100%",
    border: "box",
    marginLeft: "25%",
    margiRight: "auto"
}
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const pages = ["Home", "Demeter", "Gauge", "Stake", "Swap", "More"]
    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >
                <List sx={{ marginTop: "1rem" }}>
                    <Logo styles={logoStyles} />
                    <Divider />
                    {
                        pages.map((page, index) => {
                            {
                                return (
                                    <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
                                        <Button color="inherit" component={Link} to={`/${(page).toLowerCase()}`}>
                                            {page}
                                        </Button>
                                    </ListItemButton>
                                )
                            }
                        })
                    }

                </List>
            </Drawer>
            <IconButton sx={{ marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
                <Menu />
            </IconButton>
        </React.Fragment>
    )
}

export default DrawerComp;