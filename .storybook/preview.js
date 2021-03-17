import theme, { muiTheme } from '../constants/theme';
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  (Story) => (
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Story />
        </MuiThemeProvider>
      </ThemeProvider>
  )
];