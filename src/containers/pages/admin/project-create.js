import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLabAdmin } from '@components/nav';
import color from '@supporters/utils/color';
import { HeaderDashboard } from '@components/header-dashboard';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
  Grid
} from '@material-ui/core';
import {
  AddPhotoAlternate,
  PersonAddDisabled,
  PersonAdd,
  CompareArrows
} from '@material-ui/icons';
import { Input, Dropdown, Button, Title } from '@commons/components';

const images = [
  '/media/images/logo/logo192.png',
  '/media/images/logo/logo192.png',
  '/media/images/logo/logo192.png'
];

class ProjectCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: 'private',
      start: '',
      end: '',
      specialize: 1,
      description: ''
    };
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { name, status, start, end, specialize, description } = this.state;
    return (
      <div style={{ display: 'flex' }}>
        <NavLabAdmin />
        <div
          style={{
            width: '100%',
            height: '100vh',
            flex: 1,
            overflowY: 'scroll',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <HeaderDashboard
            breadcrums={[
              { label: 'Viện khoa học không gian Hồ Chí Minh', to: '#' },
              { label: 'Thêm dự án', to: '#' }
            ]}
          />
          <div
            style={{
              padding: 10,
              flex: 1,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Paper
              elevation={2}
              style={{
                padding: 20,
                boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)'
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div style={{ display: 'flex' }}>
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="Ảnh lab"
                        style={{
                          width: 120,
                          height: 120,
                          borderRadius: 4,
                          border: '1px solid #00000020',
                          marginRight: 20
                        }}
                      />
                    ))}

                    <div
                      style={{
                        width: 120,
                        height: 120,
                        borderRadius: 4,
                        border: '1px dashed gray',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                      }}
                    >
                      <AddPhotoAlternate style={{ color: 'gray' }} />
                      <Typography
                        variant="body2"
                        style={{ marginTop: 10 }}
                        color="textSecondary"
                      >
                        Thêm hình ảnh
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <Input
                    handleChange={this.changeState('name')}
                    value={name}
                    label="Tên dự án"
                    id="i1"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Dropdown
                    label="Trạng thái"
                    id="i2"
                    value={status}
                    onChange={this.changeState('status')}
                    data={[
                      { value: 'private', label: 'Bí mật' },
                      { value: 'public', label: 'Công khai' }
                    ]}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    value={start || '1998-03-03'}
                    handleChange={this.changeState('start')}
                    label="Ngày bắt đầu"
                    type="date"
                    id="i3"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    label="Ngày kết thúc"
                    id="i4"
                    type="date"
                    value={end || '1998-03-03'}
                    onChange={this.changeState('end')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Dropdown
                    value={specialize}
                    handleChange={this.changeState('specialize')}
                    label="Lĩnh vực"
                    id="i5"
                    data={[{ value: 1, label: 'Công nghệ thông tin' }]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    value={description}
                    handleChange={this.changeState('description')}
                    label="Mô tả dự án"
                    id="i6"
                    multiline
                    rows={4}
                    rowsMax={6}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography>Trưởng dự án</Typography>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          src="/media/images/logo/logo192.png"
                          alt="avatar"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Nguyễn Huy Hùng"
                        secondary="Viện trưởng đại học Adam Eva"
                      />
                      <ListItemSecondaryAction>
                        <IconButton>
                          <CompareArrows />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>

                  <Typography>Thành viên</Typography>
                  <List>
                    {[1, 2].map(index => (
                      <ListItem key={index}>
                        <ListItemAvatar>
                          <Avatar
                            src="/media/images/logo/logo192.png"
                            alt="avatar"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Nguyễn Huy Hùng"
                          secondary="Viện trưởng đại học Adam Eva"
                        />
                        <ListItemSecondaryAction>
                          <IconButton>
                            <PersonAddDisabled color="secondary" />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}

                    <ListItem>
                      <ListItemAvatar>
                        <IconButton style={{ background: color.main }}>
                          <PersonAdd style={{ color: 'white' }} />
                        </IconButton>
                      </ListItemAvatar>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Paper>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Title>Tuyển thành viên</Title>
              <IconButton
                color="primary"
                style={{
                  marginLeft: 10,
                  marginTop: 4,
                  width: 39,
                  height: 39,
                  backgroundColor: color.main,
                  boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)'
                }}
              >
                <Typography style={{ fontSize: 10, color: 'white' }}>
                  BẬT
                </Typography>
              </IconButton>
            </div>
            <Paper
              elevation={2}
              style={{
                padding: 20,
                boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)'
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Input
                    // value=""
                    // handleChange={this.changeState('')}
                    label="Mô tả yêu cầu"
                    id="i6"
                    multiline
                    rows={4}
                    rowsMax={6}
                  />
                </Grid>
              </Grid>
            </Paper>

            <div style={{ width: '50%', marginTop: 16 }}>
              <Button
                // disabled={}
                variant="contained"
                color="primary"
                // onClick={}
              >
                Xác nhận
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(ProjectCreate));
