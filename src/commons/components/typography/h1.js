import React from 'react';
import { Typography } from '@material-ui/core';

export function H1({ children, style }) {
  return (
    <Typography variant="h4" color="textPrimary" style={style} component="h4">
      {children}
    </Typography>
  );
}
