import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { H1, Logo, Input, Link, Button } from '@commons/components';
import { login } from '@supporters/actions';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { history, dLogin } = this.props;
    const { username, password } = this.state;

    return (
      <Container maxWidth="sm" style={{ marginTop: 60 }}>
        <Logo />
        <H1 style={{ margin: '20px 0' }}>Đăng nhập</H1>
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => dLogin(username, password)}
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
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dLogin: (username, password) => dispatch(login(username, password))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
