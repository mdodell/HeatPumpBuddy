import React, {useState} from 'react';
import {AbsoluteGrid, FullGridItem, FullPage} from "../components/Grids";
import Typography from "@material-ui/core/Typography";
import { Form,  } from 'react-final-form';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { TextField, Select } from 'mui-rff';
import useAPI from "../hooks/useAPI";
import CalculatorModel from '../models/Calculator';
import {SVG} from "../components/SVG";
import useResizeHandler from "../hooks/useResizeHandler";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";


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

    const [response, setResponse] = useState()

    const onSubmit = ({year, size, stories, cost, houseType}) => {
         let dataToSend = {
             year: Number(year),
             size: Number(size),
             stories: Number(size),
             cost: Number(size),
             houseType
         }



         console.log(dataToSend)
         fetch('/api/run', {
             method: "POST",
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({...dataToSend})
         }).then(res => res.json()).then(data => {
             console.log(data)
             setResponse(data)
         });
    };

    const [isMobile, isTablet] = useResizeHandler();


    return (
         <FullPage container justify="center" alignItems="center">
             <AbsoluteGrid container>
                 <FullGridItem xs={12} container alignItems="flex-end">
                     <SVG src="/svgs/empty_street.svg" alt="suburbs" height={(!isMobile && !isTablet) ? "100%" : undefined}/>
                 </FullGridItem>
             </AbsoluteGrid>
            <FullGridItem xs={12} container alignItems="center" direction="column">
                <Grid item xs={12} container justify="center">
                    <Grid item xs={12} container justify="center">
                        <Grid item xs={10} md={6} container justify="center" alignContent="center">
                            <Paper elevation={3}>
                                <Box m={2}>
                                    <Box textAlign="center">
                                        <Typography variant="h3">Calculate Your Savings</Typography>
                                    </Box>
                                    <Form
                                        onSubmit={onSubmit}
                                        render={({ handleSubmit, reset, submitting, pristine, values }) => (
                                            <form onSubmit={handleSubmit} noValidate>
                                                <Grid container alignItems="flex-start" spacing={2}>
                                                    <Grid item xs={12}>
                                                        <TextField label="How many square feet is your home?" required name="size" type="number" />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField label="What year was your home built?" required name="year" type="number" />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField label="How many stories is your home?" required name="stories" type="number" />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField label="How much did your home cost?" required name="cost" type="number" />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Select name="houseType" label="Select a house type" required>
                                                            {["Conventional",
                                                                "Colonial",
                                                                "Bungalow",
                                                                "Condominium", "Farm", "Cape Cod", "Victorian", "Ranch", "Town House"].map(houseType => <MenuItem key={houseType} value={houseType}>{houseType}</MenuItem>)}
                                                        </Select>
                                                    </Grid>
                                                    <Grid item style={{ marginTop: 16 }}>
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
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

            </FullGridItem>
        </FullPage>
    );
}

export default Calculator;