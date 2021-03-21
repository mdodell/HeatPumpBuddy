import React from 'react';
import {costInfoSubmit, costInfoValidate} from "../utils";
import Grid from "@material-ui/core/Grid";
import { TextField } from "mui-rff";
import Button from "@material-ui/core/Button";
import {Form} from "react-final-form";

function CostForm({setResponse, handleNext, initialValues}) {
    return (
        <Form
            onSubmit={(values) => {
                setResponse(costInfoSubmit(values));
                handleNext();
            }}
            initialValues={initialValues}
            validate={costInfoValidate}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12}>
                            <TextField label="Current Annual Heating Cost" required name="currentCost" type="number" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Estimated Annual Heat Pump Cost" required name="heatPumpCost" type="number" />
                        </Grid>
                        <Grid item style={{ marginTop: 16 }} container justify="flex-end">
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={submitting}
                            >
                                See your savings
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            )}
        />
    );
}

export default CostForm;