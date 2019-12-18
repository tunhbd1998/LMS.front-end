import React from 'react';
import { Typography, OutlinedInput } from '@material-ui/core';
import color from '@supporters/utils/color';

export function Input({
  id,
  value,
  handleChange,
  label,
  type,
  defaultValue,
  disabled,
  rows,
  rowsMax,
  multiline
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        color="textPrimary"
        htmlFor={id}
        gutterBottom
        component="label"
        variant="body1"
      >
        {label}
      </Typography>
      <OutlinedInput
        type={type || 'text'}
        style={{
          backgroundColor: color.background
        }}
        {...{
          rows,
          rowsMax,
          multiline,
          id,
          value,
          onChange: handleChange,
          defaultValue,
          disabled
        }}
      />
    </div>
  );
}
