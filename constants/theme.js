import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { css } from 'styled-components';

export const Theme = {
    color: {
        primary: "#8CD8D2",
        secondary: "#c3e7e2",
        black: '#232323',
        gray: '#707070',
        white: '#fff'
    },
    widths: {
        xs: '600px',
        sm: '960px',
        md: '1280px',
        lg: '1920px'
    }
};

export const materialUITheme = {
    palette: {
        primary: {
            main: Theme.color.primary
        },
        secondary: {
            main: Theme.color.secondary
        },
        text: {
            primary: Theme.color.black,
            secondary: Theme.color.gray
        },
    }
};

export const Breakpoints = Object.keys(Theme.widths).reduce((acc, size) => {
    acc[size] = (...args) => css`
        @media (max-width: ${Theme.widths[size]}) {
            ${css(...args)};
        }
    `;
    return acc;
}, {});

export const muiTheme = responsiveFontSizes(createMuiTheme(materialUITheme));

export default Theme;

