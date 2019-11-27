import store from '@supporters/store/store';
import React from 'react';

export const injectReducer = (Component, reducerName, reducer) => {
  store.injectReducer(reducerName, reducer);

  return function WrappedComponent({ children, ...props }) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props}>{children}</Component>;
  };
};
