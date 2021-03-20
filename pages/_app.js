import React, { useEffect } from "react";
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from 'styled-components';
import { useStore } from '../store'
import theme, {muiTheme} from "../constants/theme";
import Header from "../components/Header";


export default function App({ Component, pageProps }) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);

  const store = useStore(pageProps.initialReduxState)

  return (
      <>
      <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
                      <Provider store={store}>
                          <CssBaseline />
                          <Header />
                          <Component {...pageProps} />
                      </Provider>
          </MuiThemeProvider>
      </ThemeProvider>
      </>
  )
}
