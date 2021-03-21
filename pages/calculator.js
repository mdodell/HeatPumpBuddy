import React, {useState} from 'react';
import {FullGridItem, FullPage} from "../components/Grids";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Stepper from "../components/Header/components/Stepper";
import CalculatorBackground from "../components/CalculatorForm/components/CalculatorBackground";
import CoachForm from "../components/CalculatorForm/components/CoachForm";
import CostForm from "../components/CalculatorForm/components/CostForm";
import styled from 'styled-components'
import SavingsChart from "../components/CalculatorForm/components/SavingsChart";
import {getChartData} from "../components/CalculatorForm/utils";

export const A = styled.a`
    color: ${props => props.theme.color.primary};
`

function Calculator(props) {
    const [activeStep, setActiveStep] = useState(0);
    const [houseInfo, setHouseInfo] = useState({});
    const [costInfo, setCostInfo] = useState({})

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getTitleText = () => {
        switch (activeStep) {
            case 0:
                return "See your savings";
            case 1:
                return "Connect with a coach"
        }
    }

    return (
        <FullPage container justify="center" alignItems="center">
            <CalculatorBackground step={activeStep}/>
            <FullGridItem xs={12} container alignItems="center" direction="column">
                <Grid item xs={12} container justify="center">
                    <Grid item xs={12} container justify="center">
                        <Grid item xs={10} md={6} container justify="center" alignContent="center">
                            <Paper elevation={3}>
                                <Box m={2}>
                                    <Box textAlign="center">
                                        <Typography variant="h3" gutterBottom>{getTitleText()}</Typography>
                                        {activeStep == 0 &&
                                        <Typography variant="body1">Visit the <A target="_blank" href="https://c03.apogee.net/mvc/home/hes/land/el?utilityname=eversource&spc=hcc">heat pump
                                            calculator</A> to see how much your annual heating costs are in comparison to alternatives</Typography>}
                                    </Box>
                                    {activeStep == 0 &&
                                    <CostForm initialValues={costInfo} setResponse={setCostInfo} handleNext={handleNext}
                                              handleBack={handleBack}/>}
                                    {activeStep == 1 && <CoachForm setResponse={setHouseInfo} handleNext={handleNext}
                                                                   handleBack={handleBack}/>}
                                    <Stepper activeStep={activeStep}/>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                {activeStep == 1 && <SavingsChart data={getChartData(costInfo)}/>}
            </FullGridItem>
        </FullPage>
    );
}

export default Calculator;