import React from 'react';
import { makeStyles, Card, CardContent } from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import RoomIcon from '@material-ui/icons/Room';
import { Fade } from 'react-reveal';

const useStyles = makeStyles(theme => ({
  activityItem: {
    width: '500px',
    height: '130px',
    boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.2)',
    margin: '10px',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0px 0px 3px 2px rgba(0,0,0,0.3)'
    },
    padding: '5px',
    boxSizing: 'border-box'
    // borderRadius: ''
  },
  activityItemContent: {
    display: 'flex',
    flexWrap: ' wrap',
    padding: '0px!important',
    width: '100%',
    height: '100%'
  },
  activityImage: {
    width: '100%',
    height: '100%'
  },
  activityInfo: {
    width: 'calc(100% - 110px - 30px)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    fontWeight: 'medium',
    boxSizing: 'border-box',
    padding: '5px'
  },
  activityInfoItem: {
    padding: '2px 0px',
    display: 'flex',
    alignItems: 'center'
  },
  activityName: {
    color: '#415764',
    fontWeight: '600',
    fontSize: '16px'
  }
}));

export default function ProjectItem({ activity }) {
  const classes = useStyles();
  const ACTIVITY_IMAGE_DEFAULT =
    '/media/images/logo/activity-image-default.png';

  return (
    <Fade>
      <Card className={classes.activityItem}>
        <CardContent className={classes.activityItemContent}>
          <div style={{ width: '110px', height: '100%' }}>
            <img
              className={classes.activityImage}
              src={activity.image || ACTIVITY_IMAGE_DEFAULT}
              alt="activity avatar"
            />
          </div>

          <div className={classes.activityInfo}>
            <span
              className={`${classes.activityName} ${classes.activityInfoItem}`}
            >
              {activity.name}
            </span>

            <span className={classes.activityInfoItem}>
              <ScheduleIcon style={{ marginRight: '5px' }} />
              {activity.startTime} - {activity.endTime}
            </span>
            <span className={classes.activityInfoItem}>
              <RoomIcon style={{ marginRight: '5px' }} /> {activity.address}
            </span>
            <span className={classes.activityInfoItem}>
              <WorkOutlineIcon style={{ marginRight: '5px' }} />
              {activity.lab.name}
            </span>
          </div>
        </CardContent>
      </Card>
    </Fade>
  );
}
