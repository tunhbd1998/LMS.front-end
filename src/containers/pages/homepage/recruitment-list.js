import React from 'react';
import { get, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { Container, Button, makeStyles } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import RecruitmentItem from '@components/recruitment-item';
import { styles } from '@commons/globals/common-styles';
import * as mainActions from '@supporters/store/redux/actions/main.actions';
import Loading from '@components/loading';
import * as fetchDataConfigs from '@commons/configs/fetch-data';

const useStyles = makeStyles(theme => ({
  container: {
    padding: styles.contentPadding,
    paddingTop: '20px',
    paddingBottom: '20px',
    background: 'url("/media/images/banner/banner-two.png")',
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

function RecruitmentList({ recruitments, actions }) {
  const classes = useStyles();

  React.useEffect(() => {
    if (
      !recruitments.page ||
      !recruitments.totalPage ||
      isEmpty(recruitments.list)
    ) {
      actions.fetchLabRecruitments();
    }
  });

  const fetchNextPage = () => {
    actions.fetchLabRecruitments(
      recruitments.page + (recruitments.page < recruitments.totalPage ? 1 : 0),
      fetchDataConfigs.LAB_RECRUITMENT_PAGE_SIZE
    );
  };

  const fetchPrevPage = () => {
    actions.fetchLabRecruitments(
      recruitments.page + (recruitments.page > 1 ? -1 : 0),
      fetchDataConfigs.LAB_RECRUITMENT_PAGE_SIZE
    );
  };

  return (
    <Container className={classes.container}>
      <span className={classes.title}>Tin tuyển dụng thành viên</span>
      <Container className={classes.listContainer}>
        <Container className={classes.itemList}>
          {recruitments.list.map(recruitment => (
            <RecruitmentItem key={recruitment.id} recruitment={recruitment} />
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
  recruitments: get(state, ['mainReducer', 'recruitments'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchLabRecruitments: mainActions.fetchLabRecruitments
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecruitmentList);
