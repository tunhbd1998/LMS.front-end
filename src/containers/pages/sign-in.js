import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { H1, Logo, Input, Link, Button } from '@commons/components';
import { signIn } from '@supporters/store/redux/actions';
import { getCookie } from '@supporters/utils/cookies';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  // componentDidMount() {
  //   const token = getCookie('token');
  //   const role = getCookie('role');

  //   if ()
  // }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  submit = e => {
    e.preventDefault();

    const { username, password } = this.state;
    const { rSignIn } = this.props;

    if (!username || !password) return;
    rSignIn(username, password);
  };

  render() {
    const {
      history,
      location,
      rFailedAuth,
      rIsProcessingAuth,
      rSignInSuccess,
      rUser
    } = this.props;
    const { username, password } = this.state;
    console.log(this.props);
    if (
      (rUser.token && rUser.role) ||
      (getCookie('token') && getCookie('role'))
    ) {
      const destUrl = get(location, ['state', 'destUrl']);
      return <Redirect to={destUrl || '/'} />;
    }

    return (
      <Container maxWidth="sm" style={{ marginTop: 60 }}>
        <Logo />
        <H1 style={{ margin: '20px 0' }}>Đăng nhập</H1>
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                value={username}
                handleChange={this.changeState('username')}
                label="Tên đăng nhập"
                id="i1"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                value={password}
                handleChange={this.changeState('password')}
                label="Mật khẩu"
                id="i2"
                type="password"
              />
            </Grid>

            <Grid item xs={12}>
              {rFailedAuth && rFailedAuth.message && (
                <Typography gutterBottom align="center" color="secondary">
                  {rFailedAuth.message === 'Your account is incorrect'
                    ? 'Thông tin đăng nhập không chính xác'
                    : rFailedAuth.message}
                </Typography>
              )}

              <Button
                variant="contained"
                color="primary"
                disabled={rIsProcessingAuth}
                onClick={this.submit}
                type="submit"
              >
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
              <Button
                variant="outlined"
                color="primary"
                onClick={() => history.push('/sign-up')}
              >
                Đăng ký
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      rFailedAuth: state.authReducer.failedAuth,
      rIsProcessingAuth: state.authReducer.isProcessingAuth,
      rSignInSuccess: state.authReducer.signInSuccess,
      rUser: state.authReducer.user
    }),
    { rSignIn: signIn }
  )(SignIn)
);
