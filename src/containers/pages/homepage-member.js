import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLabMember } from '@components/nav';

class HomepageMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    return <NavLabMember />;
  }
}

export default withRouter(connect(null, {})(HomepageMember));
