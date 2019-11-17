import React from 'react';
import { Provider } from 'react-redux';
import { getStore } from '@supporters/store';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@supporters/themes/global';
import Routers from '@containers/routers';

export default function AppContainer() {
  const instance = getStore();

  return (
    <Provider store={instance}>
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </Provider>
  );
}
