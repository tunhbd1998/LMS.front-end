import React from 'react';
import { IconButton, useMediaQuery, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { styles } from '@commons/globals/common-styles';
import UserMenu from './user-menu';

const useStyles = makeStyles(theme => ({
  toolbar: {
    height: '78px',
    background: '#109CF1',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: styles.contentPadding
  },
  logo: {
    width: '45px',
    height: '40px'
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <a href="/">
            <img
              src="/media/images/logo/logo-header.png"
              alt="logo"
              className={classes.logo}
            />
          </a>
        </IconButton>
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}
