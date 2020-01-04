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
  MoreHoriz,
  Edit
} from '@material-ui/icons';
import color from '@supporters/utils/color';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';

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

function ProjectItemComp({ tab, classes, history }) {
  const [open, setopen] = useState(true);
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
          <IconButton
            onClick={() => history.push('/admin/lab/:lid/project/:pid/edit')}
            size="small"
            edge="end"
            aria-label="comments"
          >
            <Edit />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {[
            {
              icon: <Person />,
              to: '/admin/lab/32/project/32/member',
              text: 'Thành viên'
            },
            {
              icon: <Assignment />,
              to: '/admin/lab/32/project/32/task',
              text: 'Công việc'
            },
            {
              icon: <CalendarToday />,
              to: '/admin/lab/32/project/32/schedule',
              text: 'Lịch làm việc'
            }
          ].map((tab2, index) => (
            <ListItem
              onClick={() => history.push(tab2.to)}
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

export default withStyles(styles)(withRouter(ProjectItemComp));
