import styled from 'styled-components';
import Grid from "@material-ui/core/Grid";

export const FullPage = styled(Grid)`
    height: 100vh;
`;

export const FullPageGrid = styled(Grid)`
    min-height: 100%;
`

export const AbsoluteGrid = styled(Grid)`
    position: absolute;
    height: 100%;
    z-index: -1;
`;

export const FullGridItem = styled(Grid).attrs({
    item: true
})`
    height: 100%;
    padding-top: 64px;
`;