import React from 'react';
import { Provider } from 'react-redux';
import App from '@components/app';
import { getStore } from '@supporters/store';
import { ThemeProvider } from '@material-ui/core/styles';
import SignIn from '@containers/pages/signin';
import SignUp from '@containers/pages/signup';
import SignUpAdmin from '@containers/pages/signup-admin';
import theme from '@supporters/themes/global';

export default function AppContainer() {
  const instance = getStore();

  return (
    <Provider store={instance}>
      <ThemeProvider theme={theme}>
        <SignUp />
      </ThemeProvider>
    </Provider>
  );
}
