import styled from 'styled-components';
import MenuIcon from "@material-ui/icons/Menu";
import {AppBar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export const Hamburger = styled(MenuIcon)`
    color: ${props => props.theme.color.black}
`;

export const NavBar = styled(AppBar).attrs({
    color: 'inherit'
})`
    background-color: transparent;
`

export const HeaderTitle = styled(Typography)`
    &:hover {
        cursor: pointer;
    }
`