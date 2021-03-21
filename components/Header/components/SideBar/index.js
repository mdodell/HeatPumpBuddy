import React from 'react';
import {Drawer} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import useResizeHandler from "../../../../hooks/useResizeHandler";
import {A, CloseDrawer, SideBarLink} from "./styles";
import globeAnimation from "./globe.json";
import Lottie from "lottie-react";
import Box from "@material-ui/core/Box";
import CloseIcon from '@material-ui/icons/Close';
import Divider from "@material-ui/core/Divider";
import Link from "next/link";

function SideBar({setDrawer, setDrawerOpen}) {

    return (
        <Drawer anchor='left' open={setDrawer} onClose={() => setDrawerOpen(false)}>
            <Grid container direction="column">
                <Box display="flex" justifyContent="flex-end" m={2}>
                    <CloseDrawer onClick={() => setDrawerOpen(false)}>
                        <CloseIcon />
                    </CloseDrawer>
                </Box>
                <Lottie animationData={JSON.parse(globeAnimation)} />
                <SideBarLink>
                    <Link href="/calculator"><A onClick={() => setDrawerOpen(false)}>Calculate Your Savings</A></Link>
                    <Box mt={2}>
                        <Divider />
                    </Box>
                </SideBarLink>
                <SideBarLink>
                    <A href="https://heatsmartalliance.org/resources/" target="_blank"onClick={() => setDrawerOpen(false)}>Heat Smart Alliance's Resources</A>
                    <Box mt={2}>
                        <Divider />
                    </Box>
                </SideBarLink>
                <SideBarLink>
                    <A href="https://sealed.com/climate-control/" target="_blank"onClick={() => setDrawerOpen(false)}>What is a Heat Pump?</A>
                    <Box mt={2}>
                        <Divider />
                    </Box>
                </SideBarLink>
            </Grid>
        </Drawer>
    );
}

export default SideBar;