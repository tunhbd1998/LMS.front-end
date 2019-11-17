import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

import { H1, Logo, Input, Link, Button } from '@commons/components';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container maxWidth="sm" style={{ marginTop: 60 }}>
        <Logo />
        <H1 style={{ margin: '20px 0' }}>Đăng nhập</H1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input label="Tên đăng nhập" id="i1" />
          </Grid>
          <Grid item xs={12}>
            <Input label="Mật khẩu" id="i2" />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Đăng nhập
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link href="https://stackoverflow.com/questions/52801051/react-site-warning-the-href-attribute-requires-a-valid-address-provide-a-valid">
              Quên mật khẩu?
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body1"
              gutterBottom
              color="textSecondary"
              align="center"
            >
              hoặc
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" color="primary">
              Đăng ký
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
