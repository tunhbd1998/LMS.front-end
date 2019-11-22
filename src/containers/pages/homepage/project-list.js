import React from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';
import {
  Container,
  Button,
  useMediaQuery,
  makeStyles
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ProjectItem from '@components/project-item';
import { styles } from '@commons/globals/common-styles';

const useStyles = makeStyles(theme => ({
  container: {
    padding: useMediaQuery('(max-width: 576px)')
      ? '0px 10px'
      : styles.contentPadding,
    paddingTop: '20px',
    paddingBottom: '20px',
    background: 'url("/media/images/banner/banner-one.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  title: {
    textAlign: 'center',
    display: 'block',
    padding: '20px 0px',
    fontSize: '30px',
    color: '#fff'
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '0px'
  },
  itemList: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '0px'
  },
  buttons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px'
  },
  button: {
    margin: '0px 5px',
    padding: '5px 30px',
    color: '#415764',
    background: '#fff',
    '&:disabled': {
      // background: 'rgba(0,0,0,0.1)'
    },
    '&:not(:disabled):hover': {
      background: '#109CF1',
      color: '#fff'
    }
  }
}));

function ProjectList({ projects }) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <span className={classes.title}>Các dự án đang tuyển thành viên</span>
      <Container className={classes.listContainer}>
        <Container className={classes.itemList}>
          {projects.list.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </Container>
        <Container className={classes.buttons}>
          <Button className={classes.button} disabled={projects.page === 1}>
            <ChevronLeftIcon />
          </Button>
          <Button
            className={classes.button}
            disabled={projects.page === projects.totalPage}
          >
            <ChevronRightIcon />
          </Button>
        </Container>
      </Container>
    </Container>
  );
}

const mapStateToProps = state => ({
  projects: get(state, ['mainReducer', 'projects'])
});

export default connect(
  mapStateToProps,
  null
)(ProjectList);
