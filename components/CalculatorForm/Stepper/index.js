import React from 'react';
import MobileStepper from "@material-ui/core/MobileStepper";
import styled from 'styled-components';
import Box from "@material-ui/core/Box";

const StepperWrapper = styled(MobileStepper)`
    background: none!important;
    justify-content: center!important;
`

function Stepper({activeStep, handleNext, handleBack}) {
    return (
        <Box mt={2}>
            <StepperWrapper
                variant="dots"
                steps={3}
                position="static"
                activeStep={activeStep}
                nextButton={
                    null
                }
                backButton={
                    null
                }
            />
        </Box>

    );
}

export default Stepper;