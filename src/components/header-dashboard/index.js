import React from 'react';
import { IconButton, Link, Typography, Breadcrumbs } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import color from '@supporters/utils/color';

export function HeaderDashboard({ breadcrums }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: color.main,
        padding: '1rem 2rem'
      }}
    >
      <Breadcrumbs separator={<b style={{ color: 'white' }}>/</b>}>
        {breadcrums.map((bread, index) => {
          const Comp = index === breadcrums.length - 1 ? Typography : Link;
          return (
            <Comp
              href={breadcrums.length - 1 ? bread.to : null}
              key={index}
              style={{
                color: 'white',
                opacity: index === breadcrums.length - 1 ? 1 : 0.8
              }}
            >
              {bread.label}
            </Comp>
          );
        })}
      </Breadcrumbs>
      <IconButton>
        <Settings style={{ color: 'white' }} />
      </IconButton>
    </div>
  );
}
