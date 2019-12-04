import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import {
  Assignment,
  Stars,
  Person,
  Build,
  AllInbox,
  Alarm,
  CalendarToday,
  MoreHoriz
} from '@material-ui/icons';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Logo, Title, UserMin } from '@commons/components';
import color from '@supporters/utils/color';
import { withStyles } from '@material-ui/core/styles';

const user = {
  name: 'Hoang Van A',
  email: 'abc123hcmus@gmail.com'
};

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

class NavLabAdminIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 400,
          padding: 20,
          boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)',
          height: '100vh',
          overflowY: 'auto'
        }}
      >
        <Title>Dự án của bạn</Title>

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
        <Title>Lab yêu thích</Title>
        <Title>Lab đang chờ duyệt</Title>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(withStyles(styles)(NavLabAdminIn)));
