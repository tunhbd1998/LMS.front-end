import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLabAdmin, NavLabAdminProject } from '@components/nav';
import { HeaderDashboard } from '@components/header-dashboard';
import { Paper, Typography, Grid, Popover, Button } from '@material-ui/core';
import color from '@supporters/utils/color';
import { MoreHoriz, AccessTime } from '@material-ui/icons';
import { Input, Title } from '@commons/components';

function Request() {
  const [open, setopen] = useState(false);
  const [rejectText, setrejectText] = useState('');
  const [anchorEl, setanchorEl] = useState(null);
  const [isSubmit, setisSubmit] = useState(false);

  return (
    <Paper
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
          <Title noMargin>Cho em mượn lab đi </Title>
          <MoreHoriz />
        </Grid>

        <Grid item xs={12}>
          <Typography color="textSecondary">
            Định nghĩa: Theo Grab, nhà sáng lập định lý Quẹt 1 được 2, khi chúng
            ta thanh toán tại một cửa hàng nhất định một số tiền nhất định, nếu
            có sự trợ giúp của Ví điện tử Moca trên ứng dụng Grab, số tiền nhất
            định chúng ta đã bỏ ra sẽ được hiện thực hóa thành 2 khoản có ích:
            MỘT MÓN HÀNG THEO NHU CẦU VÀ MỘT SỐ ĐIỂM TÍCH LŨY KHA KHÁ TRONG ỨNG
            DỤNG.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Typography variant="body2">
            <AccessTime
              style={{ verticalAlign: 'middle', marginRight: 8 }}
              fontSize="small"
            />
            17:30 12/03/2019 - 17:30 16/03/2019{' '}
          </Typography>
          <div
            style={{
              display: 'flex',
              border: '1px solid',
              borderRadius: 4,
              borderColor: color.main
            }}
          >
            {!isSubmit && (
              <>
                <Button onClick={() => setisSubmit(true)} size="small">
                  Duyệt
                </Button>
                <Button
                  onClick={e => {
                    setopen(true);
                    setanchorEl(e.target);
                  }}
                  size="small"
                >
                  Từ chối
                </Button>
              </>
            )}
          </div>
        </Grid>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={() => setopen(false)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <div style={{ margin: '1rem' }}>
            <div style={{ width: 400, marginBottom: '1rem' }}>
              <Input
                value={rejectText}
                handleChange={e => setrejectText(e.target.value)}
                variant="outlined"
                label="Lý do từ chối"
              />
            </div>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                setopen(false);
                setisSubmit(true);
              }}
              size="small"
            >
              Gửi
            </Button>
          </div>
        </Popover>

        {isSubmit && (
          <Grid item xs={12}>
            {rejectText ? (
              <Typography color="secondary">Từ chối: {rejectText}</Typography>
            ) : (
              <Typography style={{ color: 'green' }}>Đã duyệt</Typography>
            )}
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}

class RequestManagement extends React.Component {
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
              { label: 'Yêu cầu mượn lab', to: '#' }
            ]}
          />
          <div style={{ padding: 10, flex: 1, display: 'flex' }}>
            <NavLabAdminProject style={{ marginRight: 20 }} />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                marginTop: -20
              }}
            >
              {[1, 2, 3, 4, 5, 6].map(t => (
                <Request key={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(RequestManagement));
