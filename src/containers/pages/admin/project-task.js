import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLabAdmin, NavLabAdminProject } from '@components/nav';
import { HeaderDashboard } from '@components/header-dashboard';
import { Paper, Typography, Grid, Avatar, IconButton } from '@material-ui/core';
import {
  CalendarToday,
  FilterList,
  MoreHoriz,
  AccessTime
} from '@material-ui/icons';
import { Title, Button } from '@commons/components';
import { ButtonGroup } from '../../../commons/components';

class TaskManagement extends React.Component {
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
              { label: 'Công việc', to: '#' }
            ]}
          />
          <div style={{ padding: 10, flex: 1, display: 'flex' }}>
            <NavLabAdminProject style={{ marginRight: 20 }} />

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
                  <Button color="primary" variant="contained">
                    Thêm mới công việc
                  </Button>
                </div>
                <div style={{ display: 'flex' }}>
                  <IconButton style={{ marginRight: 8 }}>
                    <FilterList />
                  </IconButton>
                  <IconButton>
                    <CalendarToday />
                  </IconButton>
                </div>
              </div>

              {[1, 2, 3, 4, 5, 6].map(t => (
                <Paper
                  key={t}
                  elevation={2}
                  style={{
                    padding: 20,
                    marginTop: 20,
                    boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid
                      item
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%'
                      }}
                    >
                      <Title noMargin>Nghiên cứu hợp chất hydrocarbon</Title>
                      <MoreHoriz />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography color="textSecondary">
                        Định nghĩa: Theo Grab, nhà sáng lập định lý Quẹt 1 được
                        2, khi chúng ta thanh toán tại một cửa hàng nhất định
                        một số tiền nhất định, nếu có sự trợ giúp của Ví điện tử
                        Moca trên ứng dụng Grab, số tiền nhất định chúng ta đã
                        bỏ ra sẽ được hiện thực hóa thành 2 khoản có ích: MỘT
                        MÓN HÀNG THEO NHU CẦU VÀ MỘT SỐ ĐIỂM TÍCH LŨY KHA KHÁ
                        TRONG ỨNG DỤNG.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        <AccessTime
                          style={{ verticalAlign: 'middle', marginRight: 8 }}
                          fontSize="small"
                        />
                        17:30 12/03/2019 - 17:30 16/03/2019{' '}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%'
                      }}
                    >
                      <div style={{ display: 'flex' }}>
                        <Avatar
                          style={{ width: 20, height: 20, marginRight: 4 }}
                          src="/media/images/logo/logo192.png"
                        />
                        <Avatar
                          style={{ width: 20, height: 20, marginRight: 4 }}
                          src="/media/images/logo/logo192.png"
                        />
                        <Avatar
                          style={{ width: 20, height: 20, marginRight: 4 }}
                          src="/media/images/logo/logo192.png"
                        />
                        <Avatar
                          style={{ width: 20, height: 20, marginRight: 4 }}
                          src="/media/images/logo/logo192.png"
                        />
                      </div>

                      <ButtonGroup />
                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(TaskManagement));
