import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLabAdmin } from '@components/nav';
import { HeaderDashboard } from '@components/header-dashboard';
import { Paper, Typography, Grid } from '@material-ui/core';
import { AddPhotoAlternate } from '@material-ui/icons';
import { Input, Dropdown, Button } from '@commons/components';

const images = [
  '/media/images/logo/logo192.png',
  '/media/images/logo/logo192.png',
  '/media/images/logo/logo192.png'
];

class LabEditInfo extends React.Component {
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
              { label: 'Cập nhật thông tin', to: '#' }
            ]}
          />
          <div style={{ padding: 10, flex: 1 }}>
            <Paper
              elevation={2}
              style={{
                padding: 20,
                boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)'
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div style={{ display: 'flex' }}>
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="Ảnh lab"
                        style={{
                          width: 120,
                          height: 120,
                          borderRadius: 4,
                          border: '1px solid #00000020',
                          marginRight: 20
                        }}
                      />
                    ))}

                    <div
                      style={{
                        width: 120,
                        height: 120,
                        borderRadius: 4,
                        border: '1px dashed gray',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                      }}
                    >
                      <AddPhotoAlternate style={{ color: 'gray' }} />
                      <Typography
                        variant="body2"
                        style={{ marginTop: 10 }}
                        color="textSecondary"
                      >
                        Thêm hình ảnh
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Input
                    value="Viện khoa học không gian Hồ Chí Minh"
                    // handleChange={this.changeState('')}
                    label="Tên lab"
                    id="i1"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    value=""
                    // handleChange={this.changeState('')}
                    label="Địa chỉ lab"
                    id="i2"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    value=""
                    // handleChange={this.changeState('')}
                    label="Trực thuộc"
                    id="i3"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Dropdown
                    label="Lĩnh vực"
                    id="i4"
                    // value={}
                    // onChange={this.changeState('')}
                    data={[]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    value=""
                    type="file"
                    // handleChange={this.changeState('')}
                    label="Giấy chứng nhận hoạt động"
                    id="i5"
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
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(LabEditInfo));
