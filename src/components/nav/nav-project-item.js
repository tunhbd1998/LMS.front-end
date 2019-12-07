import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  Collapse
} from '@material-ui/core';
import {
  Assignment,
  Person,
  CalendarToday,
  MoreHoriz
} from '@material-ui/icons';
import color from '@supporters/utils/color';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    margin: '8px 0',
    '&:hover': {
      backgroundColor: color.background,
      color: color.main,
      fontWeight: 600
    }
  },

  selected: {
    backgroundColor: color.background,
    color: color.main
  }
};

function ProjectItemComp({ tab, classes }) {
  const [open, setopen] = useState(false);
  return (
    <>
      <ListItem
        classes={{
          root: classes.root,
          selected: classes.selected
        }}
        button
        onClick={() => setopen(!open)}
      >
        <ListItemAvatar>
          <Avatar
            alt={tab.text}
            src={tab.image}
            style={{ width: 24, height: 24, borderRadius: 4 }}
          />
        </ListItemAvatar>
        <ListItemText title={tab.name}>
          <Typography
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {tab.name}
          </Typography>
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton size="small" edge="end" aria-label="comments">
            <MoreHoriz />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {[
            { icon: <Person />, text: 'Thành viên' },
            { icon: <Assignment />, text: 'Công việc' },
            { icon: <CalendarToday />, text: 'Lịch làm việc' }
          ].map((tab2, index) => (
            <ListItem
              classes={{
                root: classes.root
              }}
              style={{ paddingLeft: 32 }}
              button
              key={index}
            >
              <ListItemIcon style={{ color: 'inherit' }}>
                {tab2.icon}
              </ListItemIcon>
              <ListItemText primary={tab2.text} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}

export default withStyles(styles)(ProjectItemComp);
