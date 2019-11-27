import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import genders from '@supporters/const/genders';
import {
  H1,
  Logo,
  Input,
  Title,
  Button,
  Dropdown,
  Snackbar
} from '@commons/components';
import { dropdownData } from '@supporters/mock';
import moment from 'moment';
import { signUp } from '@supporters/actions';

class SignUpAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      birthday: moment().format('YYYY-MM-DD'),
      fullname: '',
      IDNumber: '',
      IDCardNumber: '',
      phone: '',
      email: '',
      university: 1,
      gender: 1,
      job: '',

      // lab
      labName: '',
      labUniversity: 1,
      labAddress: '',
      labSpecialize: 1
    };
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { history, rSignUp, rResponse, rIsSigningUp } = this.props;
    const {
      username,
      password,
      birthday,
      fullname,
      IDNumber,
      IDCardNumber,
      phone,
      email,
      university,
      gender,
      job,

      labName,
      labUniversity,
      labAddress,
      labSpecialize
    } = this.state;

    return (
      <Container maxWidth="sm" style={{ marginTop: 60 }}>
        <Logo />
        <H1 style={{ margin: '20px 0' }}>Đăng ký tài khoản quản trị</H1>

        <Title>Thông tin lab của bạn</Title>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input
              label="Tên lab"
              id="i1"
              value={labName}
              handleChange={this.changeState('labName')}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Địa chỉ lab"
              id="i2"
              value={labAddress}
              handleChange={this.changeState('labAddress')}
            />
          </Grid>
          <Grid item xs={6}>
            <Dropdown
              label="Trực thuộc"
              id="i3"
              data={dropdownData}
              value={labUniversity}
              onChange={this.changeState('labUniversity')}
            />
          </Grid>
          <Grid item xs={6}>
            <Dropdown
              label="Lĩnh vực"
              id="i4"
              value={labSpecialize}
              onChange={this.changeState('labSpecialize')}
              data={dropdownData}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <Input label="Giấy chứng nhận hoạt động" id="i5" />
          </Grid> */}
        </Grid>

        <Title>Thông tin cá nhân</Title>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input
              label="Tên đăng nhập"
              id="i-1"
              value={username}
              handleChange={this.changeState('username')}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Mật khẩu"
              id="i0"
              type="password"
              value={password}
              handleChange={this.changeState('password')}
            />
          </Grid>
          <Grid item xs={9}>
            <Input
              label="Họ và tên"
              id="i6"
              value={fullname}
              handleChange={this.changeState('fullname')}
            />
          </Grid>
          <Grid item xs={3}>
            <Dropdown
              label="Giới tính"
              id="i7"
              value={gender}
              onChange={this.changeState('gender')}
              data={genders}
            />
          </Grid>

          <Grid item xs={12}>
            <Input
              label="Ngày sinh"
              id="i9"
              type="date"
              value={birthday}
              handleChange={this.changeState('birthday')}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              label="Số CMND"
              id="i8"
              value={IDNumber}
              handleChange={this.changeState('IDNumber')}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              label="Số thẻ sinh viên"
              id="i8"
              value={IDCardNumber}
              handleChange={this.changeState('IDCardNumber')}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Số điện thoại"
              id="i10"
              value={phone}
              handleChange={this.changeState('phone')}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Địa chỉ email"
              id="i11"
              value={email}
              handleChange={this.changeState('email')}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              label="Chức vụ"
              id="i12"
              value={job}
              handleChange={this.changeState('job')}
            />
          </Grid>
          <Grid item xs={6}>
            <Dropdown
              label="Nơi công tác"
              id="i13"
              data={dropdownData}
              value={university}
              onChange={this.changeState('university')}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              disabled={rIsSigningUp}
              onClick={() =>
                rSignUp({
                  user: {
                    username,
                    password,
                    birthday,
                    fullname,
                    IDNumber,
                    IDCardNumber,
                    phone,
                    email,
                    university,
                    gender,
                    job
                  },
                  lab: {
                    name: labName,
                    university: labUniversity,
                    address: labAddress,
                    specialize: labSpecialize
                  }
                })
              }
            >
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
            <Button
              variant="outlined"
              color="primary"
              onClick={() => history.push('/sign-in')}
            >
              Đăng nhập
            </Button>
          </Grid>
        </Grid>

        {rResponse && (
          <Snackbar open handleClose={() => {}} message={rResponse} />
        )}
      </Container>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      rResponse: state.signUp.response,
      rIsSigningUp: state.signUp.isSigningUp
    }),
    { rSignUp: signUp }
  )(SignUpAdmin)
);
