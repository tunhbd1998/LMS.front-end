import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLabAdmin, NavLabAdminEvent } from '@components/nav';
import { HeaderDashboard } from '@components/header-dashboard';
import {
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Tabs,
  Tab
} from '@material-ui/core';

class ProjectEditInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: 0 };
  }

  render() {
    const { tab } = this.state;

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
              { label: 'Lễ kỷ niệm 3 năm thành lập', to: '#' },
              { label: 'Thành viên quan tâm', to: '#' }
            ]}
          />
          <div style={{ padding: 10, flex: 1, display: 'flex' }}>
            <NavLabAdminEvent style={{ marginRight: 20 }} />
            <Paper
              elevation={2}
              style={{
                flex: 1,
                padding: 20,
                boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)'
              }}
            >
              <Tabs
                value={tab}
                onChange={(event, tab) => {
                  this.setState({ tab });
                }}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="SẼ THAM GIA (32)" />
                <Tab label="QUAN TÂM (1)" />
              </Tabs>

              {tab === 0 && (
                <List>
                  {new Array(32).fill(1).map((i, index) => (
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
                    </ListItem>
                  ))}
                </List>
              )}
              {tab === 1 && (
                <List>
                  {new Array(1).fill(1).map((i, index) => (
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
                    </ListItem>
                  ))}
                </List>
              )}
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(ProjectEditInfo));
