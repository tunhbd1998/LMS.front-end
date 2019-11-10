import React from 'react';
import { Provider } from 'react-redux';
import App from '@components/app';
import { getStore } from '@supporters/store';

export default function AppContainer() {
  const instance = getStore();

  return (
    <Provider store={instance}>
      <App />
    </Provider>
  );
}
