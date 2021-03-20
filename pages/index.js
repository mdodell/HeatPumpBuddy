import React from "react";
import Grid from "@material-ui/core/Grid";
import useResizeHandler from "../hooks/useResizeHandler";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";


export default function Index() {
    const [isMobile] = useResizeHandler()
  return (
      <Box m={2}>
          <Grid container>
              <Grid xs={12} item container justify="center">
                  <img src="/images/logo.png" style={{width: isMobile ? '100%' : '40%'}} />
              </Grid>
              <Grid xs={12} item container justify="center">
                  <Typography variant="h2" gutterBottom>
                      <Box textAlign="center">
                          A Heat Solution for the Modern Age
                      </Box>
                  </Typography>
              </Grid>
              <Grid xs={12} item container>
                  <Grid item container justify="center">
                      <Button size="large" variant="contained" color="primary">
                          <Typography variant="h6" color="textSecondary">Find out how much you can save</Typography>
                      </Button>
                  </Grid>
              </Grid>
          </Grid>
      </Box>
  )
}
