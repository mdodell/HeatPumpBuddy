import React, {useState} from 'react';
import {FullGridItem, FullPage} from "../components/Grids";
import Typography from "@material-ui/core/Typography";
import { Form, Field } from 'react-final-form';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { TextField } from 'mui-rff';


// const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//         errors.firstName = 'Required';
//     }
//     if (!values.lastName) {
//         errors.lastName = 'Required';
//     }
//     if (!values.email) {
//         errors.email = 'Required';
//     }
//     return errors;
// };

function Calculator(props) {
    const onSubmit = async values => {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(300);
        window.alert(JSON.stringify(values, 0, 2));
    };

    return (
        <FullPage container justify="center" alignItems="center">
            <FullGridItem xs={6} container alignItems="center" direction="column">
                <Grid item xs={10} container>
                    <Grid item xs={12}>
                        <Typography variant="h3">Estimate the Annual Costs of your Home Heating Energy Use</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Form
                            onSubmit={onSubmit}
                            render={({ handleSubmit, reset, submitting, pristine, values }) => (
                                <form onSubmit={handleSubmit} noValidate>
                                    <Grid container alignItems="flex-start" spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField required name="sqft" type="number" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                type="button"
                                                variant="contained"
                                                onClick={reset}
                                                disabled={submitting || pristine}
                                            >
                                                Reset
                                            </Button>
                                        </Grid>
                                        <Grid item style={{ marginTop: 16 }}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                disabled={submitting}
                                            >
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                                </form>
                            )}
                        />


                    </Grid>
                </Grid>

            </FullGridItem>
            <FullGridItem xs={6} container alignItems="center">
                <h1>Hello</h1>
            </FullGridItem>
        </FullPage>
    );
}

export default Calculator;