import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { Logo } from '@commons/components';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  notification: {
    width: '400px',
    maxWidth: '400px',
    boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.3)',
    margin: 'auto',
    padding: '20px',
    borderRadius: '4px'
  },
  title: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#415764'
  },
  content: {
    fontSize: '16px',
    color: '415764'
  }
}));
export function FlatNotification({
  title,
  content,
  className,
  hasContainer = false,
  ...props
}) {
  const classes = useStyles();

  return hasContainer ? (
    <Container className={classes.container}>
      <Container
        className={`${classes.notification} ${className || ''}`}
        {...props}
      >
        <Logo size="big" style={{ margin: '20px 0px' }} />
        <div className={classes.title}>{title}</div>
        <div className={classes.content}>{content}</div>
      </Container>
    </Container>
  ) : (
    <Container
      className={`${classes.notification} ${className || ''}`}
      {...props}
    >
      <Logo size="big" style={{ margin: '20px 0px' }} />
      <div className={classes.title}>{title}</div>
      <div className={classes.content}>{content}</div>
    </Container>
  );
}
