import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLabAdmin } from '@components/nav';
import { HeaderDashboard } from '@components/header-dashboard';

class HomepageAdmin extends React.Component {
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
        <div style={{ width: '100%' }}>
          <HeaderDashboard
            breadcrums={[
              { label: 'Viện khoa học không gian Hồ Chí Minh', to: '#' },
              { label: 'Dự án', to: '#' }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(HomepageAdmin));
