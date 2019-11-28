import React from 'react';
import { Typography, OutlinedInput } from '@material-ui/core';
import color from '@supporters/utils/color';

export function Input({ id, value, handleChange, label, type,defaultValue,disabled }) {
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
        id={id}
        value={value}
        onChange={handleChange}
        defaultValue={defaultValue}
        disabled ={disabled}
      />
    </div>
  );
}
