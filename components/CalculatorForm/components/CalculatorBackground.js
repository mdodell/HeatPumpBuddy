import React from 'react';
import {AbsoluteGrid, FullGridItem} from "../../Grids";
import {SVG} from "../../SVG";
import useResizeHandler from "../../../hooks/useResizeHandler";

function CalculatorBackground({step}) {
    const [isMobile, isTablet] = useResizeHandler();
    const isDesktop = (!isMobile && !isTablet);
    return (
        <AbsoluteGrid container>
            <FullGridItem xs={12} container alignContent={isDesktop ? "center" : "flex-end"}>
                <SVG src="/svgs/empty_street.svg" alt="empty_street" height={isDesktop ? "100%" : undefined}/> 
            </FullGridItem>
        </AbsoluteGrid>
    );
}

export default CalculatorBackground;