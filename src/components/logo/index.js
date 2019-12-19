import React from 'react';
import { makeStyles } from '@material-ui/core';

const logoWidth = 96;
const logoHeight = 39;
const useStyles = makeStyles(theme => ({
  logo: {
    '&.small': {
      width: `${logoWidth * 0.5}px`,
      height: `${logoHeight * 0.5}px`
    },
    '&.medium': {
      width: `${logoWidth * 0.8}px`,
      height: `${logoHeight * 0.8}px`
    },
    '&.big': {
      width: `${logoWidth}px`,
      height: `${logoHeight}px`
    }
  }
}));
export default function Logo({ size, className, ...props }) {
  const classes = useStyles();

  return (
    <img
      {...props}
      className={`${classes.logo} ${size} ${className}`}
      src="/media/images/logo/logo.png"
      alt="logo"
    />
  );
}
