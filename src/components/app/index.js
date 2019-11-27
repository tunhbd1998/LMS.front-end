import React from 'react';
import { Button } from '@material-ui/core';
import { signOut } from '@supporters/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './app.styles.scss';

function App({ rSignOut, history }) {
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <Button
          variant="text"
          color="secondary"
          onClick={() => {
            rSignOut();
            history.push('/sign-in');
          }}
        >
          Đăng xuất
        </Button>
      </div>
      <header className="App-header">
        <img
          src="/media/images/logo/logo.svg"
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withRouter(connect(null, { rSignOut: signOut })(App));
