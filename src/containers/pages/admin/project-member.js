import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLabAdmin, NavLabAdminProject } from '@components/nav';
import { HeaderDashboard } from '@components/header-dashboard';
import color from '@supporters/utils/color';
import {
  Paper,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import {
  Clear,
  Check,
  CalendarToday,
  PersonAddDisabled
} from '@material-ui/icons';
import { Input, Title, Button } from '@commons/components';

class MemberManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
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
              { label: 'Khám phá ngôi xao xa ơi là xa', to: '#' },
              { label: 'Thành viên', to: '#' }
            ]}
          />
          <div style={{ padding: 10, flex: 1, display: 'flex' }}>
            <NavLabAdminProject style={{ marginRight: 20 }} />

            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <Title>Yêu cầu (2)</Title>
              <Paper
                elevation={2}
                style={{
                  padding: 20,
                  boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)'
                }}
              >
                <List>
                  {[1, 2].map(index => (
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
                          <Clear color="secondary" />
                        </IconButton>

                        <IconButton>
                          <Check style={{ color: 'green' }} />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Paper>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Title>Tuyển thành viên</Title>
                <IconButton
                  color="primary"
                  style={{
                    marginLeft: 10,
                    marginTop: 4,
                    width: 39,
                    height: 39,
                    backgroundColor: color.main,
                    boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <Typography style={{ fontSize: 10, color: 'white' }}>
                    BẬT
                  </Typography>
                </IconButton>
              </div>

              <Paper
                elevation={2}
                style={{
                  padding: 20,
                  boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)'
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Input
                      // value=""
                      // handleChange={this.changeState('')}
                      label="Mô tả yêu cầu"
                      id="i6"
                      multiline
                      rows={4}
                      rowsMax={6}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      // disabled={}
                      variant="contained"
                      color="primary"
                      // onClick={}
                    >
                      Xác nhận
                    </Button>
                  </Grid>
                </Grid>
              </Paper>

              <Title>Thành viên (3)</Title>
              <Paper
                elevation={2}
                style={{
                  padding: 20,
                  boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)'
                }}
              >
                <Typography>Trưởng dự án</Typography>
                <List>
                  <ListItem>
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
                        <CalendarToday />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>

                <Typography>Thành viên</Typography>
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
                          <CalendarToday />
                        </IconButton>

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
    );
  }
}

export default withRouter(connect(null, {})(MemberManagement));
