import React from 'react';
import { Typography, TextField, MenuItem } from '@material-ui/core';
import color from '@supporters/utils/color';

export function Dropdown({ id, value, data, handleChange, label }) {
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
      <TextField
        style={{
          backgroundColor: color.background
        }}
        id={id}
        select
        value={value}
        onChange={handleChange}
        variant="outlined"
      >
        {data.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
