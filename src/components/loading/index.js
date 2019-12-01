import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { styles } from '@commons/globals/common-styles';

export default function Loading(props) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '0px',
        left: '0px',
        background: 'rgba(0,0,0,0.2)'
      }}
    >
      <CircularProgress style={{ color: styles.colorBlue }} {...props} />
    </div>
  );
}
