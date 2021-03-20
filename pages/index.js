import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { motion } from 'framer-motion';
import { FullPage, Slide } from 'react-full-page';
import {AbsoluteGrid, FullGridItem, FullPageGrid} from "../components/Grids";
import useResizeHandler from "../hooks/useResizeHandler";
import {SVG} from "../components/SVG";

export default function Index() {
    const [isMobile] = useResizeHandler()
    const bounceTransition = {
        y: {
            duration: 0.4,
            yoyo: Infinity,
            ease: "easeOut",
        },
    }
  return (
      <FullPage>
          <Slide>
              <FullPageGrid container justify="center" alignItems="center">
                  <AbsoluteGrid container>
                      <Grid item xs={12} md={6} container alignItems="flex-end">
                          <SVG src="/svgs/suburbs.svg" alt="suburbs"/>
                      </Grid>
                      {!isMobile && <Grid item md={6} container alignItems="flex-end">
                        <SVG src="/svgs/build_your_home.svg" alt="Home" />
                      </Grid>}
                  </AbsoluteGrid>
                  <Grid item xs={12}>
                      <Typography variant="h2" gutterBottom>
                          <Box textAlign="center">
                              A Heat Solution for the Modern Age
                          </Box>
                      </Typography>
                  </Grid>
                  <Grid item>
                      <Button variant="contained" color="primary">
                          <Typography variant="h6" color="textSecondary">Find out how much you can save</Typography>
                      </Button>
                  </Grid>
                  <Grid container item justify="center">
                      <motion.div transition={bounceTransition} animate={{
                          y: ["25%", "-25%"]
                      }}>
                          <ExpandMoreIcon fontSize="large" />
                      </motion.div>
                  </Grid>
              </FullPageGrid>
          </Slide>
          <Slide>
              <FullPageGrid container justify="center" alignItems="center">
                  <AbsoluteGrid container>
                      <Grid item xs={12} md={6} container alignItems="flex-end">
                          <SVG src="/svgs/at_home.svg" alt="suburbs"/>
                      </Grid>
                  </AbsoluteGrid>
                  <Grid item xs={6}>

                  </Grid>
                  <FullGridItem item xs={6} container alignContent="space-between">
                      <Typography variant="h2" gutterBottom>
                          <Box textAlign="center">
                              Our Solution
                          </Box>
                      </Typography>
                      <Typography variant="h2" gutterBottom>
                          <Box textAlign="center">
                              A Heat Solution for the Modern Age
                          </Box>
                      </Typography>
                  </FullGridItem>
              </FullPageGrid>
          </Slide>
      </FullPage>
  )
}
