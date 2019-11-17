import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

import { H1, Logo, Input, Button, Dropdown } from '@commons/components';
import { gender, dropdownData } from '@supporters/mock';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container maxWidth="sm" style={{ marginTop: 60 }}>
        <Logo />
        <H1 style={{ margin: '20px 0' }}>Đăng ký tài khoản mới</H1>

        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Input label="Họ và tên" id="i1" />
          </Grid>
          <Grid item xs={3}>
            <Dropdown label="Giới tính" id="i2" value="male" data={gender} />
          </Grid>
          <Grid item xs={6}>
            <Input label="Số CMND" id="i3" />
          </Grid>
          <Grid item xs={6}>
            <Input label="Ngày sinh" id="i4" type="date" />
          </Grid>
          <Grid item xs={12}>
            <Input label="Số điện thoại" id="i5" />
          </Grid>
          <Grid item xs={12}>
            <Input label="Địa chỉ email" id="i6" />
          </Grid>
          <Grid item xs={12}>
            <Input label="Nghề nghiệp" id="i7" />
          </Grid>
          <Grid item xs={6}>
            <Input label="MSSV" id="i8" />
          </Grid>
          <Grid item xs={6}>
            <Dropdown
              label="Nơi học tập"
              id="i9"
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
