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
import ProjectRecruitmentItem from '@components/project-recruitment-item';
import { styles } from '@commons/globals/common-styles';
import * as mainActions from '@supporters/store/redux/actions/main.actions';
import Loading from '@components/loading';
import * as fetchDataConfigs from '@commons/configs/fetch-data';
import NotFoundData from '../../../commons/components/not-found-data';

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
    padding: '20px 0px',
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
    '&:not(:disabled):hover': {
      background: '#109CF1',
      color: '#fff'
    }
  }
}));

function ProjectRecruitmentList({ recruitments, actions }) {
  const classes = useStyles();

  React.useEffect(() => {
    if (
      (!recruitments.page ||
        !recruitments.totalPage ||
        isEmpty(recruitments.list)) &&
      !recruitments.loading &&
      !recruitments.message
    ) {
      actions.fetchProjectRecruitments();
    }
  });

  const fetchNextPage = () => {
    actions.fetchProjectRecruitments(
      recruitments.page + (recruitments.page < recruitments.totalPage ? 1 : 0),
      fetchDataConfigs.PROJECT_RECRUITMENT_PAGE_SIZE
    );
  };

  const fetchPrevPage = () => {
    actions.fetchProjectRecruitments(
      recruitments.page + (recruitments.page > 1 ? -1 : 0),
      fetchDataConfigs.PROJECT_RECRUITMENT_PAGE_SIZE
    );
  };

  return (
    <Container className={classes.container}>
      <span className={classes.title}>Các dự án đang tuyển thành viên</span>
      <Container className={classes.listContainer}>
        <Container className={classes.itemList}>
          {isEmpty(recruitments.list) && !recruitments.loading ? (
            <NotFoundData />
          ) : null}
          {recruitments.list.map(recruitment => (
            <ProjectItem key={recruitment.id} recruitment={recruitment} />
          ))}
          {recruitments.loading ? <Loading /> : null}
        </Container>
        {recruitments.totalPage > 1 ? (
          <Container className={classes.buttons}>
            <Button
              className={classes.button}
              disabled={recruitments.page === 1}
              onClick={fetchPrevPage}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              className={classes.button}
              disabled={recruitments.page === recruitments.totalPage}
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
  recruitments: get(state, ['mainReducer', 'projectRecruitments'])
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
)(ProjectRecruitmentList);
