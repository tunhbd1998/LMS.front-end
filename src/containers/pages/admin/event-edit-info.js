import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLabAdmin, NavLabAdminEvent } from '@components/nav';
import { HeaderDashboard } from '@components/header-dashboard';
import { Paper, Typography, Grid } from '@material-ui/core';
import { AddPhotoAlternate } from '@material-ui/icons';
import { Input, Dropdown, Button } from '@commons/components';

const images = [
  '/media/images/logo/logo192.png',
  '/media/images/logo/logo192.png',
  '/media/images/logo/logo192.png'
];

class ProjectEditInfo extends React.Component {
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
              { label: 'Lễ kỷ niệm 3 năm thành lập', to: '#' }
            ]}
          />
          <div style={{ padding: 10, flex: 1, display: 'flex' }}>
            <NavLabAdminEvent style={{ marginRight: 20 }} />
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
                    value="Lễ kỷ niệm 3 năm thành lập"
                    // handleChange={this.changeState('')}
                    label="Tên sự kiện"
                    id="i1"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    value="1998-03-03"
                    // handleChange={this.changeState('')}
                    label="Ngày bắt đầu"
                    type="date"
                    id="i3"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    label="Ngày kết thúc"
                    id="i4"
                    type="date"
                    value="1998-03-03"
                    // onChange={this.changeState('')}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Input
                    // value=""
                    // handleChange={this.changeState('')}
                    label="Địa điểm diễn ra"
                    id="i6"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    // value=""
                    // handleChange={this.changeState('')}
                    label="Địa điểm diễn ra"
                    id="i7"
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
                    Cập nhật
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

export default withRouter(connect(null, {})(ProjectEditInfo));
