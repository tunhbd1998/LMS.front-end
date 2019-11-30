import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { H1, Logo, Input, Title, Button, Dropdown } from '@commons/components';
import { genders } from '@commons/data/gender';
import { universities } from '@commons/data/university';
import { specializes } from '@commons/data/specialize';
import { provinces } from '@commons/data/province';
import {
  processUniversity,
  processSpecializes,
  processProvinces
} from '@supporters/utils/process-data';
import moment from 'moment';
import { signUp } from '@supporters/store/redux/actions';

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
      university: '',
      gender: 1,
      job: '',

      // lab
      labName: '',
      labUniversity: '',
      labProvince: '',
      labDetailAddress: '',
      labSpecialize: ''
    };
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const {
      history,
      rSignUp,
      rFailedResponse,
      rIsSigningUp,
      rSuccessfuldResponse
    } = this.props;

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
      labProvince,
      labDetailAddress,
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
            <Dropdown
              label="Tỉnh"
              id="i22"
              displayEmpty
              data={processProvinces(provinces)}
              value={labProvince}
              onChange={this.changeState('labProvince')}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Địa chỉ lab"
              id="i2"
              value={labDetailAddress}
              handleChange={this.changeState('labDetailAddress')}
            />
          </Grid>

          <Grid item xs={6}>
            <Dropdown
              label="Trực thuộc"
              id="i3"
              displayEmpty
              data={processUniversity(universities)}
              value={labUniversity}
              onChange={this.changeState('labUniversity')}
            />
          </Grid>
          <Grid item xs={6}>
            <Dropdown
              label="Lĩnh vực"
              id="i4"
              displayEmpty
              value={labSpecialize}
              onChange={this.changeState('labSpecialize')}
              data={processSpecializes(specializes)}
            />
          </Grid>
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
              label="Số thẻ sinh viên"
              id="i8"
              value={IDCardNumber}
              handleChange={this.changeState('IDCardNumber')}
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
              label="Ngày sinh"
              id="i9"
              type="date"
              value={birthday}
              handleChange={this.changeState('birthday')}
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
              data={processUniversity(universities)}
              value={university}
              onChange={this.changeState('university')}
            />
          </Grid>

          <Grid item xs={12}>
            {rFailedResponse && rFailedResponse.message && (
              <Typography gutterBottom align="center" color="secondary">
                {rFailedResponse.message === 'username have exists'
                  ? 'Tài khoản đã tồn tại'
                  : rFailedResponse.message}
              </Typography>
            )}
            {rSuccessfuldResponse && rSuccessfuldResponse.message && (
              <Typography
                gutterBottom
                align="center"
                style={{ color: color.success }}
              >
                {rSuccessfuldResponse.message}
              </Typography>
            )}

            <Button
              variant="contained"
              color="primary"
              disabled={rIsSigningUp}
              onClick={() => {
                if (
                  !username ||
                  !password ||
                  !birthday ||
                  !fullname ||
                  !IDNumber ||
                  !IDCardNumber ||
                  !phone ||
                  !email ||
                  !university ||
                  !gender ||
                  !job ||
                  !labName ||
                  !labUniversity ||
                  !labProvince ||
                  !labDetailAddress ||
                  !labSpecialize
                )
                  return;

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
                    address: {
                      province: labProvince,
                      detail: labDetailAddress
                    },
                    specialize: labSpecialize
                  }
                });
              }}
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
      </Container>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      rFailedResponse: state.signUpReducer.failedResponse,
      rSuccessfuldResponse: state.signUpReducer.successfulResponse,
      rIsSigningUp: state.signUpReducer.isSigningUp
    }),
    { rSignUp: signUp }
  )(SignUpAdmin)
);
