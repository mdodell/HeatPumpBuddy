import React, {useState} from 'react';
import { FullPage, Slide } from 'react-full-page';
import Grid from "@material-ui/core/Grid";
function Calculator(props) {
    return (
        <FullPage>
            <Slide>
                <Grid container justify="center" alignItems="center" style={{height: "100%"}}>
                    <h1>Another slide content</h1>
                </Grid>
            </Slide>
            <Slide>
                <Grid container justify="center" alignItems="center" style={{height: "100%"}}>
                    <h1>Another slide content</h1>
                </Grid>
            </Slide>
        </FullPage>
    );
}

export default Calculator;