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
    const [isMobile] = useResizeHandler();

    return (
        <Drawer anchor='left' open={setDrawer} onClose={() => setDrawerOpen( false)}>
            <Grid container direction="column">
                <Box display="flex" justifyContent="flex-end" m={2}>
                    <CloseDrawer onClick={() => setDrawerOpen(false)}>
                        <CloseIcon />
                    </CloseDrawer>
                </Box>
                <Lottie animationData={JSON.parse(globeAnimation)} />
                <SideBarLink>
                    <Link href="/calculator"><A>Connect to a Heat Pump Coach</A></Link>
                    <Box mt={2}>
                        <Divider />
                    </Box>
                </SideBarLink>
                <SideBarLink>
                    <Link href="/calculator"><A>What is a Heat Pump?</A></Link>
                    <Box mt={2}>
                        <Divider />
                    </Box>
                </SideBarLink>
            </Grid>
        </Drawer>
    );
}

export default SideBar;