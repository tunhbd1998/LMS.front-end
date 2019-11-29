import React from 'react';
import { getCookie } from '@supporters/utils/cookies';
import { Redirect } from 'react-router-dom';

export function injectAuth(ComposedComponent, isRev) {
  class WrappedComponent extends React.Component {
    componentDidMount() {}

    render() {
      //   if (!getCookie('token') && !isRev) return <Redirect to="/sign-in" />;
      //   if (getCookie('token') && isRev) return <Redirect to="/" />;

      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ComposedComponent {...this.props} />;
    }
  }

  return WrappedComponent;
}
