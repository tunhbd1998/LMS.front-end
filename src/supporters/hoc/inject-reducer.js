import store from '../store/store';

export const injectReducer = (Component, reducerName, reducer) => {
  store.injectReducer(reducerName, reducer);

  return function WrappedComponent(props) {
    return <Component {...props}>{props.children}</Component>;
  };
};
