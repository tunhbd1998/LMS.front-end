import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { MoreHoriz, Edit } from '@material-ui/icons';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Title, Button } from '@commons/components';
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

class NavLabAdminEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { classes, style, history } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: 'white',
          borderRadius: 4,
          minWidth: 300,
          width: 300,
          padding: 20,
          boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)',
          overflowY: 'auto',
          ...style
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            history.push('/admin/lab/32/event/32/edit');
          }}
        >
          Thêm sự kiện
        </Button>

        <Title>Sự kiện của bạn</Title>

        <List>
          {new Array(5)
            .fill({
              image: '/media/images/logo/logo192.png',
              name: 'Lễ kỷ niệm 3 năm thành lập'
            })
            .map((tab, index) => (
              <ListItem
                onClick={() => {
                  history.push('/admin/lab/32/event/32');
                }}
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
                  <IconButton
                    onClick={() => {
                      history.push('/admin/lab/32/event/32/edit');
                    }}
                    size="small"
                    edge="end"
                    aria-label="comments"
                  >
                    <Edit />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
        </List>
      </div>
    );
  }
}

export default withRouter(
  connect(null, {})(withStyles(styles)(NavLabAdminEvent))
);
