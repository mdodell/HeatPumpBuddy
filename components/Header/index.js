import React, {useState} from 'react';
import {Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {Hamburger, NavBar} from "./styles";
import SideBar from "./components/SideBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function Header() {
    const [setDrawer, setDrawerOpen] = useState(false);

    return (
        <NavBar position="static">
            <Toolbar>
                <Box style={{position: "absolute"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
                        <Hamburger />
                    </IconButton>
                </Box>
                <Box display="flex" alignItems="center" width="100%">
                    <Box style={{flexGrow: 1, textAlign: 'center'}} fontWeight="bold">
                        <Typography color="primary" variant="h5">
                            HeatPumpBuddy
                        </Typography>
                    </Box>
                </Box>
                <SideBar setDrawer={setDrawer} setDrawerOpen={setDrawerOpen}/>
            </Toolbar>
        </NavBar>
    );
}

export default Header;