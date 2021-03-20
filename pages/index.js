import React from "react";
import Grid from "@material-ui/core/Grid";
import useResizeHandler from "../hooks/useResizeHandler";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {FullPageGrid} from "../components/FullPageGrid";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { motion } from 'framer-motion'

export default function Index() {
    const [isMobile] = useResizeHandler();

    const bounceTransition = {
        y: {
            duration: 0.4,
            yoyo: Infinity,
            ease: "easeOut",
        },
    }
  return (
      <Box m={2}>
          <FullPageGrid container direction="column" justify="space-around">
              <Grid item container justify="center">
                  <img src="/images/logo.png" style={{width: isMobile ? '80%' : '40%'}} />
              </Grid>
              <Grid item container justify="center">
                  <Typography variant="h2" gutterBottom>
                      <Box textAlign="center">
                          A Heat Solution for the Modern Age
                      </Box>
                  </Typography>
              </Grid>
              <Grid item container>
                  <Grid item container justify="center">
                      <Button size="large" variant="contained" color="primary">
                          <Typography variant="h6" color="textSecondary">Find out how much you can save</Typography>
                      </Button>
                  </Grid>
              </Grid>
              <Grid container item justify="center">
                  <motion.div transition={bounceTransition} animate={{
                      y: ["25%", "-25%"]
                  }}>
                      <ExpandMoreIcon fontSize="large" />
                  </motion.div>
              </Grid>
          </FullPageGrid>
      </Box>
  )
}
