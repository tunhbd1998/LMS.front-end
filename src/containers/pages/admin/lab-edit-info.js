import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLabAdmin, NavLabAdminProject } from '@components/nav';
import { HeaderDashboard } from '@components/header-dashboard';
import { Paper } from '@material-ui/core';

class LabEditInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
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
              { label: 'Dự án', to: '#' }
            ]}
          />
          <div style={{ padding: 10, flex: 1 }}>
            <Paper elevation={2} style={{ padding: 10 }}>
              hello
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(LabEditInfo));
