import React from 'react';
import MUIButton from '@material-ui/core/Button';

export function Button({ variant, children, color, onClick }) {
  return (
    <MUIButton
      onClick={onClick}
      style={{
        color: variant === 'contained' ? 'white' : '',
        boxShadow:
          variant === 'contained'
            ? '0px 4px 10px rgba(16, 156, 241, 0.24)'
            : '',
        padding: 10
      }}
      fullWidth
      variant={variant}
      color={color}
    >
      {children}
    </MUIButton>
  );
}
