import styled from 'styled-components';
import MenuIcon from "@material-ui/icons/Menu";
import {AppBar} from "@material-ui/core";

export const Hamburger = styled(MenuIcon)`
    color: ${props => props.theme.color.black}
`;

export const NavBar = styled(AppBar).attrs({
    color: 'inherit'
})`
    background-color: transparent;
`