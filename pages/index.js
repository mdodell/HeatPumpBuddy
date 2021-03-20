import React from "react";
import Grid from "@material-ui/core/Grid";
import useResizeHandler from "../hooks/useResizeHandler";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Logo from '../assets/svgs/logo.svg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { motion } from 'framer-motion';
import { FullPage, Slide } from 'react-full-page';


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
      <FullPage>
          <Slide>
              <Grid container justify="center" style={{height: '100%'}}>
                  <Grid container item justify="center" style={{marginTop: '6rem'}}>
                          <Logo />
                  </Grid>
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
              </Grid>
          </Slide>
          <Slide>
              <h1>Test</h1>
          </Slide>
      </FullPage>

          // <FullPageGrid container direction="column" justify="space-around">
          //     <Grid item container justify="center">
          //         <img src="/images/logo.png" style={{width: isMobile ? '80%' : '40%', height: isMobile ? '80%' : '100%'}} />
          //     </Grid>
          //     <Grid item container justify="center">
          //         <Typography variant="h2" gutterBottom>
          //             <Box textAlign="center">
          //                 A Heat Solution for the Modern Age
          //             </Box>
          //         </Typography>
          //     </Grid>
          //     <Grid item container>
          //         <Grid item container justify="center">
          //             <Button size="large" variant="contained" color="primary">
          //                 <Typography variant="h6" color="textSecondary">Find out how much you can save</Typography>
          //             </Button>
          //         </Grid>
          //     </Grid>
          //     <Grid container item justify="center">
          //         <motion.div transition={bounceTransition} animate={{
          //             y: ["25%", "-25%"]
          //         }}>
          //             <ExpandMoreIcon fontSize="large" />
          //         </motion.div>
          //     </Grid>
          // </FullPageGrid>
  )
}
