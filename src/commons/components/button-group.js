import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const status = ['Sắp', 'Đang', 'Xong'];
const bgcolors = ['green', 'orange', 'gray'];

export function ButtonGroup() {
  const [activeStatus, setactiveStatus] = useState('Sắp');

  return (
    <div
      style={{
        display: 'flex',
        border: '1px solid',
        borderRadius: 4,
        borderColor: bgcolors[status.indexOf(activeStatus)]
      }}
    >
      {status.map((s, i) => (
        <Button
          size="small"
          onClick={() => setactiveStatus(s)}
          key={i}
          style={{
            backgroundColor: activeStatus === s ? bgcolors[i] : 'white',
            color: activeStatus === s ? 'white' : 'inherit',
            borderRadius: 4
          }}
        >
          {status[i]}
        </Button>
      ))}
    </div>
  );
}
