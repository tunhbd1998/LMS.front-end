import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, makeStyles } from '@material-ui/core';
import { get } from 'lodash';
import { Fade } from 'react-reveal';
import LabList from './lab-list';
import ProjectRecruitmentList from './project-recruitment-list';
import ActivityList from './activity-list';
import LabRecruitmentList from './lab-recruitment-list';

const useStyles = makeStyles(theme => ({
  homepage: {
    width: '100%',
    padding: '0px'
  },
  itemList: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '0px'
  }
}));

function Homepage() {
  const classes = useStyles();

  return (
    <Container className={classes.homepage}>
      <Fade>
        <LabList />
      </Fade>
      <Fade>
        <ProjectRecruitmentList />
      </Fade>
      <Fade>
        <ActivityList />
      </Fade>
      <Fade>
        <LabRecruitmentList />
      </Fade>
    </Container>
  );
}

const mapStateToProps = state => ({
  projects: get(state, ['mainReducer', 'projects'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
