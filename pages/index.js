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
import {useRouter} from "next/router";
import styled from 'styled-components';

const HeatingAndCoolingTitle = styled(Box)`
    background-color: rgba(255,255,255, 0.8);
`;

const FullPageGridBlue = styled(FullPageGrid)`
    background-color: ${props => props.theme.color.primary};
    z-index: -2
`;

export const TypographyWhite = styled(Typography)`
    color: ${props => props.theme.color.white};
    text-align: center;
`

export default function Index() {
    const [isMobile, isTablet] = useResizeHandler()
    const router = useRouter();

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
                      {!isMobile && !isTablet && <Grid item md={6} container alignItems="flex-end">
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
                      <Button variant="contained" color="primary" onClick={() => router.push('/calculator')}>
                          <TypographyWhite variant="h6">Find out how much you can save</TypographyWhite>
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
                  <AbsoluteGrid container justify="center" alignItems="center">
                          <SVG src="/svgs/nature.svg" alt="suburbs" height="75%" />
                  </AbsoluteGrid>
                  <FullGridItem xs={12} container alignContent="center" justify="center">
                      <HeatingAndCoolingTitle textAlign="center">
                          <Typography variant="h1">
                              Heating and Cooling account for 40% of U.S. Carbon Emissions
                          </Typography>
                      </HeatingAndCoolingTitle>
                  </FullGridItem>
              </FullPageGrid>
          </Slide>
          <Slide>
              <FullPageGridBlue container justify="center">
                  <FullGridItem xs={12} container alignContent="flex-start" justify="center" spacing={6}>
                      <Grid item xs={12}>
                          <Box textAlign="center">
                              <TypographyWhite variant="h1">
                                  Easy Installation process
                              </TypographyWhite>
                          </Box>
                      </Grid>
                     <Grid item xs={12} md={4} container justify="center">
                         <SVG src="/svgs/calculator.svg" />
                         <TypographyWhite variant="h2" fontWeight={300} gutterBottom>
                             Estimate Savings
                         </TypographyWhite>
                     </Grid>

                      <Grid item xs={12} md={4} container justify="center">
                          <SVG src="/svgs/goals.svg" />
                          <TypographyWhite variant="h2" fontWeight={300} gutterBottom>
                              Connect with a Specialist
                          </TypographyWhite>
                      </Grid>

                      <Grid item xs={12} md={4} container justify="center">
                          <SVG src="/svgs/savings.svg" />
                          <TypographyWhite variant="h2" fontWeight={300} gutterBottom>
                              Begin Saving!
                          </TypographyWhite>
                      </Grid>
                  </FullGridItem>
              </FullPageGridBlue>
          </Slide>
      </FullPage>
  )
}
