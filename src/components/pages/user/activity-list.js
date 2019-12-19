import React from 'react';
import {
  makeStyles,
  Container,
  Button,
  useMediaQuery
} from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { get, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { styles } from '@commons/globals/common-styles';
import ActivityItem from '@components/activity-item';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import * as mainActions from '@supporters/store/redux/actions/main.actions';
import Loading from '@components/loading';
import * as fetchDataConfigs from '@commons/configs/fetch-data';
import NotFoundData from '../../../commons/components/not-found-data';

const useStyles = makeStyles(theme => ({
  container: {
    padding: styles.contentPadding,
    paddingTop: '20px',
    paddingBottom: '20px',
    background: '#E0E0E0'
  },
  title: {
    textAlign: 'center',
    display: 'block',
    padding: '20px 0px',
    fontSize: '30px',
    color: styles.mainTextColor
  },
  itemList: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '0px',
    position: 'relative'
  },
  listContainer: {
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
    '&:not(:disabled):hover': {
      background: '#109CF1',
      color: '#fff'
    }
  }
}));

function ActivityList({ activities, actions }) {
  const classes = useStyles();

  React.useEffect(() => {
    if (
      (!activities.page || !activities.totalPage || isEmpty(activities.list)) &&
      !activities.loading &&
      !activities.message
    ) {
      actions.fetchActivities(1, fetchDataConfigs.ACTIVITY_PAGE_SIZE);
    }
  });

  const fetchNextPage = () => {
    actions.fetchActivities(
      activities.page + (activities.page < activities.totalPage ? 1 : 0),
      fetchDataConfigs.ACTIVITY_PAGE_SIZE
    );
  };

  const fetchPrevPage = () => {
    actions.fetchActivities(
      activities.page + (activities.page > 1 ? -1 : 0),
      fetchDataConfigs.ACTIVITY_PAGE_SIZE
    );
  };

  return (
    <Container className={classes.container}>
      <span className={classes.title}>
        Các hoạt động, sự kiện đang và sắp diễn ra
      </span>
      <Container className={classes.listContainer}>
        <Container className={classes.itemList}>
          {isEmpty(activities.list) && !activities.loading ? (
            <NotFoundData />
          ) : null}
          {activities.list.map(activity => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
          {activities.loading ? <Loading /> : null}
        </Container>
        {activities.totalPage > 1 ? (
          <Container className={classes.buttons}>
            <Button
              className={classes.button}
              disabled={activities.page === 1}
              onClick={fetchPrevPage}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              className={classes.button}
              disabled={activities.page === activities.totalPage}
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
  activities: get(state, ['mainReducer', 'activities'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchActivities: mainActions.fetchActivities
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityList);
