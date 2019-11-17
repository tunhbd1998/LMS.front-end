import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

import { H1, Logo, Input, Title, Button, Dropdown } from '@commons/components';

import { gender, dropdownData } from '@supporters/mock';

export default class SignUpAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container maxWidth="sm" style={{ marginTop: 60 }}>
        <Logo />
        <H1 style={{ margin: '20px 0' }}>Đăng ký tài khoản quản trị</H1>

        <Title>Thông tin lab của bạn</Title>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input label="Tên lab" id="i1" />
          </Grid>
          <Grid item xs={12}>
            <Input label="Địa chỉ lab" id="i2" />
          </Grid>
          <Grid item xs={6}>
            <Dropdown
              label="Trực thuộc"
              id="i3"
              value={1}
              data={dropdownData}
            />
          </Grid>
          <Grid item xs={6}>
            <Dropdown label="Lĩnh vực" id="i4" value={1} data={dropdownData} />
          </Grid>
          <Grid item xs={12}>
            <Input label="Giấy chứng nhận hoạt động" id="i5" />
          </Grid>
        </Grid>

        <Title>Thông tin cá nhân</Title>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Input label="Họ và tên" id="i6" />
          </Grid>
          <Grid item xs={3}>
            <Dropdown label="Giới tính" id="i7" value="male" data={gender} />
          </Grid>
          <Grid item xs={6}>
            <Input label="Số CMND" id="i8" />
          </Grid>
          <Grid item xs={6}>
            <Input label="Ngày sinh" id="i9" type="date" />
          </Grid>
          <Grid item xs={12}>
            <Input label="Số điện thoại" id="i10" />
          </Grid>
          <Grid item xs={12}>
            <Input label="Địa chỉ email" id="i11" />
          </Grid>
          <Grid item xs={6}>
            <Input label="Chức vụ" id="i12" />
          </Grid>
          <Grid item xs={6}>
            <Dropdown
              label="Nơi công tác"
              id="i13"
              value={1}
              data={dropdownData}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Đăng ký
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              gutterBottom
              color="textSecondary"
              align="center"
            >
              đã có tài khoản
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" color="primary">
              Đăng nhập
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
