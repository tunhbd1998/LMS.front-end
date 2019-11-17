import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { withRouter } from 'react-router';
import { RestClient } from '@supporters/rest-client/rest-client';

import { H1, Logo, Input, Title, Button, Dropdown } from '@commons/components';
import { gender, dropdownData } from '@supporters/mock';

class SignUpAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      birthday: '',
      fullname: '',
      IDNumber: '',
      IDCardNumber: '',
      phone: '',
      email: '',
      university: '',
      lab_name: '',
      lab_university: '',
      lab_address: ''
    };
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  signUp = () => {
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
      lab_name,
      lab_university,
      lab_address
    } = this.state;

    new RestClient()
      .asyncPost('/users/sign-up-lab', {
        user: {
          username,
          password,
          birthday,
          fullname,
          IDNumber,
          IDCardNumber,
          phone,
          email,
          university
        },
        lab: {
          name: lab_name,
          university: lab_university,
          address: lab_address
        }
      })
      .then(response => {
        if (response.data && response.data.data.status === true) {
          //  ok
        }
      });
  };

  render() {
    const { history } = this.props;
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
      lab_name,
      lab_university,
      lab_address
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
              value={lab_name}
              handleChange={this.changeState('lab_name')}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Địa chỉ lab"
              id="i2"
              value={lab_address}
              handleChange={this.changeState('lab_address')}
            />
          </Grid>
          <Grid item xs={6}>
            <Dropdown
              label="Trực thuộc"
              id="i3"
              data={dropdownData}
              value={lab_university}
              handleChange={this.changeState('lab_university')}
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
            <Dropdown label="Giới tính" id="i7" value="male" data={gender} />
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
            <Input label="Chức vụ" id="i12" />
          </Grid>
          <Grid item xs={6}>
            <Dropdown
              label="Nơi công tác"
              id="i13"
              data={dropdownData}
              value={university}
              handleChange={this.changeState('university')}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={this.signUp}>
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

export default withRouter(SignUpAdmin);
