import React from 'react';
import {houseInfoSubmit, houseInfoValidate} from "../utils";
import Grid from "@material-ui/core/Grid";
import {Select, TextField} from "mui-rff";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {Form} from "react-final-form";

function CoachForm({setResponse, handleNext, handleBack}) {
    return (
        <Form
            onSubmit={async (values) => {
                const houseInfo = await houseInfoSubmit(values)
                setResponse(houseInfo);
                handleNext()
            }}
            validate={houseInfoValidate}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField label="Square foot of your home" required={true} name="size" type="number" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField label="Year your home was built" required={true} name="year" type="number" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField label="Number of stories in your home" required={true} name="stories" type="number" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField label="Your home cost" required={true} name="cost" type="number" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Select name="houseType" label="Select a house type" required={true}>
                                {["Conventional",
                                    "Colonial",
                                    "Bungalow",
                                    "Condominium", "Farm", "Cape Cod", "Victorian", "Ranch", "Town House"].map(houseType => <MenuItem key={houseType} value={houseType}>{houseType}</MenuItem>)}
                            </Select>
                        </Grid>
                        <Grid container item style={{ marginTop: 16 }} justify="space-between">
                            <Button variant="contained" color="primary" onClick={handleBack}>
                                Back
                            </Button>
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

export default CoachForm;