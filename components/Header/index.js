import React, {useState} from 'react';
import {Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {Hamburger, HeaderTitle, NavBar} from "./styles";
import SideBar from "./components/SideBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useResizeHandler from "../../hooks/useResizeHandler";
import {useRouter} from "next/router";
import { motion } from 'framer-motion';

function Header() {
    const [setDrawer, setDrawerOpen] = useState(false);
    const [isMobile] = useResizeHandler()
    const router = useRouter();

    return (
        <NavBar position="fixed">
            <Toolbar>
                <Grid container justify="space-between">
                    <Grid xs={4} item container justify="flex-start" alignItems="center">
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
                            <Hamburger />
                        </IconButton>
                    </Grid>
                    <Grid xs={4} item container justify="center" alignItems="center">
                        <Box textAlign="center" fontWeight="bold">
                            <motion.div
                                whileHover={{scale: 1.05}}
                            >
                                <HeaderTitle color="primary" variant="h5" onClick={() => router.push('/')}>
                                    HeatPumpBuddy
                                </HeaderTitle>
                            </motion.div>
                        </Box>
                    </Grid>
                    {isMobile ? <Grid item xs={4}></Grid> : <Grid xs={4} item container justify="flex-end" alignItems="center">
                        <Button variant="outlined" color="primary" onClick={() => router.push('calculator')}>Calculate your costs</Button>
                    </Grid> }

                </Grid>
                <SideBar setDrawer={setDrawer} setDrawerOpen={setDrawerOpen}/>
            </Toolbar>
        </NavBar>
    );
}

export default Header;