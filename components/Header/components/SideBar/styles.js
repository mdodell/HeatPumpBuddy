import styled from 'styled-components';
import { Box } from "@material-ui/core";
import React from "react";
import Link from 'next/link';
import IconButton from "@material-ui/core/IconButton";

export const SideBarLink = styled(Box).attrs({
    fontWeight: "fontWeightBold",
    letterSpacing: 2,
    m: 2
})``;

export const A = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    color: inherit;
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.color.primary}
    }
`

export const CloseDrawer = styled(IconButton)`
    &:hover {
        color: ${props => props.theme.color.primary}
    }  
`;