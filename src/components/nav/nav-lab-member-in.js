import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  ListItemIcon
} from '@material-ui/core';
import { MoreHoriz, AllInbox, Build, Alarm } from '@material-ui/icons';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Title, Button } from '@commons/components';
import color from '@supporters/utils/color';
import { withStyles } from '@material-ui/core/styles';
import ProjectItem from './nav-project-item';

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

class NavLabMemberIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { classes, style } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: 300,
          background: 'white',
          borderRadius: 4,
          padding: 20,
          boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)',
          overflowY: 'auto',
          ...style
        }}
      >
        <Title>Dự án</Title>

        <List>
          {new Array(5)
            .fill({
              image: '/media/images/logo/logo192.png',
              name: 'Viện khoa học không gian'
            })
            .map((tab, index) => (
              <ProjectItem tab={tab} key={index} />
            ))}
        </List>

        <Title>Sự kiện</Title>
        <List>
          {new Array(5)
            .fill({
              image: '/media/images/logo/logo192.png',
              name: 'Viện khoa học không gian'
            })
            .map((tab, index) => (
              <ListItem
                classes={{
                  root: classes.root,
                  selected: classes.selected
                }}
                button
                key={index}
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
            ))}
        </List>

        <Title>Sự kiện</Title>
        <Button variant="outlined" color="primary" onClick={() => {}}>
          Thêm mới yêu cầu
        </Button>

        <List>
          {[
            { icon: <AllInbox />, text: 'Yêu cầu sử dụng lab' },
            { icon: <Build />, text: 'Yêu cầu mượn dụng cụ' },
            { icon: <Alarm />, text: 'Lịch hẹn' }
          ].map((tab, index) => (
            <ListItem
              classes={{
                root: classes.root
              }}
              button
              key={index}
            >
              <ListItemIcon style={{ color: 'inherit' }}>
                {tab.icon}
              </ListItemIcon>
              <ListItemText primary={tab.text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default withRouter(
  connect(null, {})(withStyles(styles)(NavLabMemberIn))
);
