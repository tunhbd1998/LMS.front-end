import React from 'react';
import { Typography } from '@material-ui/core';

export function Title({ children, style }) {
  return (
    <Typography
      variant="body1"
      color="textPrimary"
      style={{ ...style, margin: '20px 0 10px', fontWeight: 600 }}
      component="p"
    >
      {children}
    </Typography>
  );
}
