import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Title, Link } from '@commons/components';
import { NavLabMember } from '@components/nav';
import { HeaderDashboard } from '@components/header-dashboard';
import { Slide } from 'react-slideshow-image';
import { Paper, Typography, Grid } from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';

const slideImages = [
  '/media/images/logo/logo192.png',
  '/media/images/logo/logo192.png',
  '/media/images/logo/logo192.png'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false
  // onChange: (oldIndex, newIndex) => {
  //   console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  // }
};
class LabInfo extends React.Component {
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
        <NavLabMember />
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
              { label: 'Thông tin lab', to: '#' }
            ]}
          />
          <div style={{ padding: 10, flex: 1 }}>
            <Paper elevation={2} style={{ overflow: 'hidden' }}>
              <div className="slide-container">
                <Slide {...properties}>
                  {slideImages.map((slide, index) => (
                    <div key={index} className="each-slide">
                      <div
                        style={{
                          backgroundColor: 'black',
                          backgroundImage: `url(${slide})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                    </div>
                  ))}
                </Slide>

                <div style={{ position: 'absolute', left: 32, bottom: 32 }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{ color: 'white', fontWeight: 600 }}
                  >
                    Viện khoa học không gian Hồ Chí Minh
                  </Typography>
                  <Typography style={{ color: '#ffffff' }}>
                    <LocationOn
                      style={{ verticalAlign: 'middle' }}
                      fontSize="small"
                      color="inherit"
                    />
                    &nbsp;Viện khoa học không gian
                  </Typography>
                </div>
              </div>

              <Grid style={{ margin: '20px 10px 40px' }} container spacing={1}>
                <Grid item xs={1}>
                  <Title style={{ display: 'inline' }}>Địa chỉ</Title>
                </Grid>
                <Grid item xs={11}>
                  <Typography>
                    123 Trần Hưng Đạo, quận Bình Thạnh, Thành phố Hồ Chí Minh
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Title style={{ display: 'inline' }}>Lĩnh vực</Title>
                </Grid>
                <Grid item xs={11}>
                  <Typography>Công nghệ thông tin</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Title style={{ display: 'inline' }}>
                    Giấy chứng nhận hoạt động (chưa có)
                  </Title>
                </Grid>
                <Grid item xs={12}>
                  <Link>Đăng tải file...</Link>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(LabInfo));
