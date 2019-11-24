import React from 'react';
import { bindActionCreators } from 'redux';
import { get, isEmpty } from 'lodash';
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
import * as mainActions from '@supporters/store/redux/actions/main.actions';
import Loading from '@components/loading';
import * as fetchDataConfigs from '@commons/configs/fetch-data';

const useStyles = makeStyles(theme => ({
  container: {
    padding: styles.contentPadding,
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
    padding: '0px',
    position: 'relative'
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

function ProjectList({ projects, actions }) {
  const classes = useStyles();

  React.useEffect(() => {
    if (!projects.page || !projects.totalPage || isEmpty(projects.list)) {
      actions.fetchProjectRecruitments();
    }
  });

  const fetchNextPage = () => {
    actions.fetchProjectRecruitments(
      projects.page + (projects.page < projects.totalPage ? 1 : 0),
      fetchDataConfigs.PROJECT_RECRUITMENT_PAGE_SIZE
    );
  };

  const fetchPrevPage = () => {
    actions.fetchProjectRecruitments(
      projects.page + (projects.page > 1 ? -1 : 0),
      fetchDataConfigs.PROJECT_RECRUITMENT_PAGE_SIZE
    );
  };

  return (
    <Container className={classes.container}>
      <span className={classes.title}>Các dự án đang tuyển thành viên</span>
      <Container className={classes.listContainer}>
        <Container className={classes.itemList}>
          {projects.list.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
          {projects.loading ? <Loading /> : null}
        </Container>
        {projects.totalPage > 1 ? (
          <Container className={classes.buttons}>
            <Button
              className={classes.button}
              disabled={projects.page === 1}
              onClick={fetchPrevPage}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              className={classes.button}
              disabled={projects.page === projects.totalPage}
              onClick={fetchNextPage}
            >
              <ChevronRightIcon />
            </Button>
          </Container>
        ) : null}
      </Container>
    </Container>
  );
}

const mapStateToProps = state => ({
  projects: get(state, ['mainReducer', 'projects'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchProjectRecruitments: mainActions.fetchProjectRecruitments
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);
