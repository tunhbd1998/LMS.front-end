import React from 'react';
import { List } from '@material-ui/core';
import {} from '@material-ui/icons';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Title, Button } from '@commons/components';
import ProjectItem from './nav-project-item';

class NavLabAdminProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 300,
          padding: 20,
          boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)',
          overflowY: 'auto'
        }}
      >
        <Button variant="outlined" color="primary" onClick={() => {}}>
          Thêm dự án
        </Button>

        <Title>Dự án của bạn</Title>

        <List>
          {new Array(5)
            .fill({
              image: '/media/images/logo/logo192.png',
              name: 'Viện khoa học không gian'
            })
            .map((tab, index) => (
              <ProjectItem tab={tab} key={index} />
            ))}
        </List>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(NavLabAdminProject));
