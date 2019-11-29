import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import {
  H1,
  Logo,
  Input,
  Button,
  Dropdown,
  Snackbar
} from '@commons/components';
import { genders, dropdownData } from '@supporters/mock';
import { signUp, clearSignUpMessage } from '@supporters/store/redux/actions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fullname: '',
      email: '',
      IDCardNumber: '',
      gender: 1
    };
  }

  submit = () => {
    const {
      username,
      password,
      fullname,
      email,
      IDCardNumber,
      gender
    } = this.state;

    if (
      !username ||
      !password ||
      !fullname ||
      !email ||
      !IDCardNumber ||
      !gender
    )
      return;
    rSignUp(username, password, fullname, email, IDCardNumber, gender);
  };

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { history, rResponse, rIsSigningUp, rClearMessage } = this.props;
    const {
      username,
      password,
      fullname,
      email,
      IDCardNumber,
      gender
    } = this.state;

    return (
      <Container maxWidth="sm" style={{ marginTop: 60 }}>
        <Logo />
        <H1 style={{ margin: '20px 0' }}>Đăng ký tài khoản mới</H1>

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
              id="i1"
              value={fullname}
              handleChange={this.changeState('fullname')}
            />
          </Grid>
          <Grid item xs={3}>
            <Dropdown
              label="Giới tính"
              id="i2"
              value={gender}
              onChange={this.changeState('gender')}
              data={genders}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Số CMND"
              id="i3"
              value={IDCardNumber}
              handleChange={this.changeState('IDCardNumber')}
            />
          </Grid>
          {/* <Grid item xs={6}>
            <Input label="Ngày sinh" id="i4" type="date" />
          </Grid>
          <Grid item xs={12}>
            <Input label="Số điện thoại" id="i5" />
          </Grid> */}
          <Grid item xs={12}>
            <Input
              label="Địa chỉ email"
              type="email"
              id="i6"
              value={email}
              handleChange={this.changeState('email')}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <Input label="Nghề nghiệp" id="i7" />
          </Grid>
          <Grid item xs={6}>
            <Input
              label="MSSV"
              id="i8"
              value={IDCardNumber}
              handleChange={this.changeState('IDCardNumber')}
            />
          </Grid>
          <Grid item xs={6}>
            <Dropdown
              label="Nơi học tập"
              id="i9"
              value={1}
              data={dropdownData}
            />
          </Grid> */}

          <Grid item xs={12}>
            <Button
              disabled={rIsSigningUp}
              variant="contained"
              color="primary"
              onClick={this.submit}
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
          <Snackbar open handleClose={rClearMessage} message={rResponse} />
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
    { rSignUp: signUp, rClearMessage: clearSignUpMessage }
  )(SignUp)
);
