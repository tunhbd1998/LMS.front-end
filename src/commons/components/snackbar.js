import React from 'react';
import MUISnackbar from '@material-ui/core/Snackbar';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

export function Snackbar({ open, handleClose, message }) {
  return (
    <MUISnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      message={<span>{message}</span>}
      action={[
        <IconButton key="close" color="secondary" onClick={handleClose}>
          <Close />
        </IconButton>
      ]}
    />
  );
}
