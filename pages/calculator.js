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
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import useResizeHandler from "../hooks/useResizeHandler";
import EmailIcon from '@material-ui/icons/Email';

export const A = styled.a`
    color: ${props => props.theme.color.primary};
`

export const StepPaper = styled(Paper)`
    margin: 12px;
`

function Calculator(props) {
    const [activeStep, setActiveStep] = useState(0);
    const [houseInfo, setHouseInfo] = useState({});
    const [costInfo, setCostInfo] = useState({})
    const [isMobile] = useResizeHandler();

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
    console.log(houseInfo)

    return (
        <FullPage container justify="center" alignItems="center">
            <CalculatorBackground step={activeStep}/>
            <FullGridItem xs={12} container alignItems="center" direction="column">
                <Grid item xs={12} container justify="center" alignContent="center">
                            {activeStep <= 1 && <StepPaper elevation={3}>
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
                            </StepPaper>}
                            {activeStep == 2 && <Grid container item xs={12} md={9} spacing={2} justify="center" alignContent="center">
                                <Grid item xs={12} md={6} container justify="center" alignContent="center" width>
                                    <Paper elevation={3}>
                                        <Box m={3}>
                                            <Grid container>
                                                {houseInfo?.output.map(coach => {
                                                    return (
                                                        <Grid key={coach.email} item xs={12} container spacing={2} style={{marginTop: '12px'}}>
                                                            <Grid container item xs={12} md={6} justify="flex-end">
                                                                <Grid item xs={12} container spacing={2}>
                                                                    <Grid item xs={3} container justify="flex-end">
                                                                        <Avatar>{coach.name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')}</Avatar>
                                                                    </Grid>
                                                                    <Grid item xs={9}>
                                                                        <Typography variant="h6">
                                                                            {coach.name}
                                                                        </Typography>
                                                                        <Typography variant="body2">
                                                                            {coach.email}
                                                                        </Typography>
                                                                    </Grid>
                                                                 </Grid>
                                                                </Grid>
                                                            <Grid item xs={12} md={6} container justify={isMobile ? "center" : "flex-start"}>
                                                                <Button fullWidth size="small" variant="contained" color="secondary" endIcon={<EmailIcon />} href={`mailto:${coach.email}`}>
                                                                    Email {coach.name.split(" ")[0]}
                                                                </Button>
                                                            </Grid>
                                                        </Grid>
                                                    );
                                                })}
                                            </Grid>
                                        </Box>

                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6} container justify="center" alignContent="center">
                                    <SavingsChart data={getChartData(costInfo)} style={{width: "95%"}}/>
                                </Grid>
                            </Grid>}
                </Grid>
            </FullGridItem>
        </FullPage>
    );
}

export default Calculator;