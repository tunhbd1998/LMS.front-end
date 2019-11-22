import React from 'react';
import {
  makeStyles,
  Container,
  Button,
  useMediaQuery
} from '@material-ui/core';
import { get } from 'lodash';
import { connect } from 'react-redux';
import { styles } from '@commons/globals/common-styles';
import ActivityItem from '@components/activity-item';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles(theme => ({
  container: {
    padding: useMediaQuery('(max-width: 576px)')
      ? '0px 10px'
      : styles.contentPadding,
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
    padding: '0px'
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
    '&:disabled': {
      // background: 'rgba(0,0,0,0.1)'
    },
    '&:not(:disabled):hover': {
      background: '#109CF1',
      color: '#fff'
    }
  }
}));

function ActivityList({ activities }) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <span className={classes.title}>
        Các hoạt động, sự kiện đang và sắp diễn ra
      </span>
      <Container className={classes.listContainer}>
        <Container className={classes.itemList}>
          {activities.list.map(activity => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </Container>
        <Container className={classes.buttons}>
          <Button className={classes.button} disabled={activities.page === 1}>
            <ChevronLeftIcon />
          </Button>
          <Button
            className={classes.button}
            disabled={activities.page === activities.totalPage}
          >
            <ChevronRightIcon />
          </Button>
        </Container>
      </Container>
    </Container>
  );
}

const mapStateToProps = state => ({
  activities: get(state, ['mainReducer', 'activities'])
});

export default connect(
  mapStateToProps,
  null
)(ActivityList);
