import React, { useState } from 'react';
import {
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';

function UserminMenu({ anchorEl, open, handleClose }) {
  return (
    <Menu
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Thông tin cá nhân</MenuItem>
      <MenuItem onClick={handleClose}>Đăng xuất</MenuItem>
    </Menu>
  );
}

export function UserMin({ avatar, name, description, hasDropDown, ...props }) {
  const [anchorMenu, setAnchorMenu] = useState(null);

  const { style } = props;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        ...style
      }}
    >
      <Avatar
        src={
          avatar ||
          'https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.0-1/c0.0.60.60a/p60x60/51139307_1007514272783357_5457290733125894144_o.jpg?_nc_cat=100&_nc_ohc=HFzJL7K96MUAQleiPNwBFvUIxXbPwepTwekHOZVpx75tKVsGhI4o26ZHA&_nc_ht=scontent.fsgn1-1.fna&oh=306524ef3437368de31f50016d681265&oe=5E75DA74'
        }
        alt={name}
        style={{ marginRight: '10px' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography
            variant="body1"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            {name}
          </Typography>
          <IconButton size="small">
            <ArrowDropDown
              onClick={event => setAnchorMenu(event.currentTarget)}
            />
          </IconButton>
        </div>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </div>
      <UserminMenu
        open={Boolean(anchorMenu)}
        anchorEl={anchorMenu}
        handleClose={() => setAnchorMenu(null)}
      />
    </div>
  );
}
