import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { H1, Logo, Input, Link, Button } from '@commons/components';
import { signIn, resetAuthState } from '@supporters/store/redux/actions';
import { getCookie } from '@supporters/utils/cookies';
import { bindActionCreators } from 'redux';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    console.log('props', props);
    props.actions.resetAuthState();
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  submit = e => {
    e.preventDefault();

    const { username, password } = this.state;
    const { actions } = this.props;

    if (!username || !password) return;
    actions.signIn(username, password);
  };

  render() {
    const { history, location, user, authState, isProcessingAuth } = this.props;
    const { username, password } = this.state;

    if (user.token && user.role && (getCookie('token') && getCookie('role'))) {
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
              <Typography gutterBottom align="center" color="secondary">
                {authState.message || null}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                disabled={isProcessingAuth}
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
      isProcessingAuth: get(state, ['authReducer', 'isProcessingAuth']),
      authState: get(state, ['authReducer', 'authState']),
      user: get(state, ['authReducer', 'user'])
    }),
    dispatch => ({
      actions: bindActionCreators({ signIn, resetAuthState }, dispatch)
    })
  )(SignIn)
);
