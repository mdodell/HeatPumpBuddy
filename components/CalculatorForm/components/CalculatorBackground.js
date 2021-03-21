import React from 'react';
import {AbsoluteGrid, FullGridItem} from "../../Grids";
import {SVG} from "../../SVG";
import useResizeHandler from "../../../hooks/useResizeHandler";

function CalculatorBackground({step}) {
    const [isMobile, isTablet] = useResizeHandler()
    return (
        <AbsoluteGrid container>
            <FullGridItem xs={12} container alignItems="flex-end">
                <SVG src="/svgs/empty_street.svg" alt="suburbs" height={(!isMobile && !isTablet) ? "100%" : undefined}/>
            </FullGridItem>
        </AbsoluteGrid>
    );
}

export default CalculatorBackground;