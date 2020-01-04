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
import { Input, Title, Dropdown, Button } from '@commons/components';

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
              { label: 'Thành viên', to: '#' },
              { label: 'Thêm mới', to: '#' }
            ]}
          />
          <div style={{ padding: 10, flex: 1, display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <Paper
                elevation={2}
                style={{
                  padding: 20,
                  boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)'
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Input
                      label="Tên đăng nhập"
                      id="i-1"
                      // value={username}
                      // handleChange={this.changeState('username')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      label="Mật khẩu"
                      id="i0"
                      type="password"
                      // value={password}
                      // handleChange={this.changeState('password')}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Input
                      label="Họ và tên"
                      id="i1"
                      // value={fullname}
                      // handleChange={this.changeState('fullname')}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Dropdown
                      label="Giới tính"
                      id="i2"
                      // value={gender}
                      // onChange={this.changeState('gender')}
                      data={[]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      label="Số CMND"
                      id="i3"
                      // value={IDCardNumber}
                      // handleChange={this.changeState('IDCardNumber')}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Input
                      label="Địa chỉ email"
                      type="email"
                      id="i6"
                      // value={email}
                      // handleChange={this.changeState('email')}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Button
                      // disabled={rIsSigningUp}
                      variant="contained"
                      color="primary"
                      // onClick={this.submit}
                    >
                      Đăng ký
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(MemberManagement));
