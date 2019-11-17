import React from 'react';
import store from '../store/store';

export const injectReducer = (Component, reducerName, reducer) => {
  store.injectReducer(reducerName, reducer);

  return function WrappedComponent({ children }) {
    return <Component {...props}>{children}</Component>;
  };
};
