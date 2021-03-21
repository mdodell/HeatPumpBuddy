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
import EcoIcon from '@material-ui/icons/Eco';

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
      <FullPage scrollMode={isMobile ? 'normal' : 'full-page'}>
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
                  <FullGridItem xs={12} container alignContent="center" justify="center" spacing={3}>
                      <Grid item xs={12}>
                          <Box textAlign="center">
                              <TypographyWhite variant="h1">
                                 Getting Started
                              </TypographyWhite>
                          </Box>
                      </Grid>
                      <Grid item container xs={12}>
                          <Grid item xs={4} container justify="center" alignItems="flex-end">
                              <SVG src="/svgs/calculator.svg" />
                              <TypographyWhite variant={isMobile ? "h6" : "h2"} fontWeight={300} gutterBottom>
                                  Estimate <br />Savings
                              </TypographyWhite>
                          </Grid>

                          <Grid item xs={4} container justify="center" alignItems="flex-end">
                              <SVG src="/svgs/goals.svg" />
                                  <TypographyWhite variant={isMobile ? "h6" : "h2"} fontWeight={300} gutterBottom>
                                      Connect with a specialist
                                  </TypographyWhite>
                          </Grid>

                          <Grid item xs={4} container justify="center" alignItems="flex-end">
                              <SVG src="/svgs/savings.svg" />
                              <TypographyWhite variant={isMobile ? "h6" : "h2"} fontWeight={300} gutterBottom>
                                  Get your system and start saving
                              </TypographyWhite>
                          </Grid>
                      </Grid>
                  </FullGridItem>
              </FullPageGridBlue>
          </Slide>
          <Slide>
              <FullPageGrid container justify="center" alignItems="center">
                  <FullGridItem xs={12} container alignContent="center" justify="center">
                      {isMobile &&
                      <Grid item xs={8} container justify="center" alignContent="center" style={{marginBottom: '12px'}}>
                          <Typography variant="h1" color="primary" align="center">
                              Your Impact
                          </Typography>
                              <SVG src="/svgs/world.svg" alt="suburbs" height="90%" />
                      </Grid>}
                      <Grid item xs={12} md={6} container alignItems="center" justify="center">
                          <Grid item xs={12} md={6} container justify="center" spacing={5}>
                              <Grid item xs={12} container alignContent='flex-start'>
                                  <Typography variant="h4" color="primary" align="left">
                                      <EcoIcon />Climate Change
                                  </Typography>
                                  <Typography variant="h6" align="left">
                                      Control your home’s climate and minimally impact the environment
                                  </Typography>
                              </Grid>
                              <Grid item xs={12} container alignContent='flex-start'>
                                  <Typography variant="h4" color="primary" align="left">
                                      <EcoIcon />Carbon Emissions
                                  </Typography>
                                  <Typography variant="h6" align="left">
                                      Decrease your carbon footprint and utility bill
                                  </Typography>
                              </Grid>
                              <Grid item xs={12} container alignContent='flex-start'>
                                  <Typography variant="h4" color="primary" align="left">
                                      <EcoIcon />Massachusetts State Goals
                                  </Typography>
                                  <Typography variant="h6" align="left">
                                      Utilize benefits through the Commonwealth’s initiatives to reduce emissions
                                  </Typography>
                              </Grid>
                          </Grid>
                      </Grid>
                      {!isMobile && <Grid item xs={6} container justify="center" alignContent="center">
                          <Grid item xs={3}>
                              <Typography variant="h1" color="primary">
                                  Your Impact
                              </Typography>
                          </Grid>
                          <Grid item xs={9}>
                              <SVG src="/svgs/world.svg" alt="suburbs" height="100%" />
                          </Grid>
                      </Grid>}
                  </FullGridItem>
              </FullPageGrid>
          </Slide>
      </FullPage>
  )
}
