import React from 'react';
import { useScrollTrigger, Zoom, makeStyles } from '@material-ui/core';
import { styles } from '@commons/globals/common-styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: '100px',
    right: '20px',
    borderRadius: '4px',
    background: '#fff',
    padding: '10px',
    color: styles.mainTextColor,
    cursor: 'pointer',
    boxShadow: '0px 0px 3px 1px rgba(0,0,0,0.1)',
    '&:hover': {
      background: styles.colorBlue,
      color: '#fff'
    }
  }
}));

export default function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}
