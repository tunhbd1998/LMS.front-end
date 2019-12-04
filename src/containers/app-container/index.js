import React from 'react';
import { Provider } from 'react-redux';
import { getStore } from '@supporters/store';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@commons/globals/themes/global';
import Routers from '@containers/routers';
import { CssBaseline } from '@material-ui/core';
import '@commons/globals/global.styles.css';

export default function AppContainer() {
  const instance = getStore();

  return (
    <Provider store={instance}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </Provider>
  );
}
