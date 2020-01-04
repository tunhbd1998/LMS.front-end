import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLabAdmin } from '@components/nav';
import { HeaderDashboard } from '@components/header-dashboard';
import {
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { Edit, PersonAddDisabled } from '@material-ui/icons';
import { Title, Button } from '@commons/components';

class TaskManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { history } = this.props;

    return (
      <div style={{ display: 'flex' }}>
        <NavLabAdmin />
        <div
          style={{
            width: '100%',
            height: '100vh',
            flex: 1,
            overflowY: 'scroll',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <HeaderDashboard
            breadcrums={[
              { label: 'Viện khoa học không gian Hồ Chí Minh', to: '#' },
              { label: 'Thành viên', to: '#' }
            ]}
          />
          <div style={{ padding: 10, flex: 1, display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center'
                }}
              >
                <div style={{ width: '50%' }}>
                  <Button
                    onClick={() => {
                      history.push('/admin/lab/32/member/32/edit');
                    }}
                    color="primary"
                    variant="contained"
                  >
                    THÊM quản trị viên
                  </Button>
                </div>
              </div>

              <div
                style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
              >
                <Title>Quản trị viên</Title>
                <Paper
                  elevation={2}
                  style={{
                    padding: 20,
                    boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <List>
                    {[1, 2, 3].map(index => (
                      <ListItem key={index}>
                        <ListItemAvatar>
                          <Avatar
                            src="/media/images/logo/logo192.png"
                            alt="avatar"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Nguyễn Huy Hùng"
                          secondary="Viện trưởng đại học Adam Eva"
                        />
                        <ListItemSecondaryAction>
                          <IconButton
                            onClick={() => {
                              history.push('/admin/lab/32/member/32/edit');
                            }}
                          >
                            <Edit />
                          </IconButton>

                          <IconButton>
                            <PersonAddDisabled color="secondary" />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Paper>

                <Title>Thành viên của lab</Title>
                <Paper
                  elevation={2}
                  style={{
                    padding: 20,
                    boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <List>
                    {[1, 2, 3].map(index => (
                      <ListItem key={index}>
                        <ListItemAvatar>
                          <Avatar
                            src="/media/images/logo/logo192.png"
                            alt="avatar"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Nguyễn Huy Hùng"
                          secondary="Viện trưởng đại học Adam Eva"
                        />
                        <ListItemSecondaryAction>
                          <IconButton>
                            <PersonAddDisabled color="secondary" />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(TaskManagement));
