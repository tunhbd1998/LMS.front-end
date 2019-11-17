import React from 'react';
import { Typography } from '@material-ui/core';

export function Link({ href, children, style }) {
  return (
    <Typography
      href={href}
      variant="body1"
      color="primary"
      style={{
        ...style,
        textDecoration: 'none',
        display: 'block'
      }}
      component="a"
    >
      {children}
    </Typography>
  );
}
