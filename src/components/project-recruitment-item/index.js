import React from 'react';
import { makeStyles, Card, CardContent } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ScheduleIcon from '@material-ui/icons/Schedule';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Fade } from 'react-reveal';

const useStyles = makeStyles(theme => ({
  projectRecruitmentItem: {
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
  },
  projectRecruitmentItemContent: {
    display: 'flex',
    flexWrap: ' wrap',
    padding: '0px!important',
    width: '100%',
    height: '100%'
  },
  projectImage: {
    width: '100%',
    height: '100%'
  },
  projectRecruitmentInfo: {
    width: 'calc(100% - 110px - 30px)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    fontWeight: 'medium',
    boxSizing: 'border-box',
    padding: '5px'
  },
  projectRecruitmentInfoItem: {
    padding: '2px 0px',
    display: 'flex',
    alignItems: 'center'
  },
  projectName: {
    color: '#415764',
    fontWeight: '600',
    fontSize: '16px'
  }
}));

export default function ProjectRecruitmentItem({ recruitment }) {
  const classes = useStyles();
  const PROJECT_IMAGE_DEFAULT = '/media/images/logo/project-image-default.png';

  return (
    <Fade>
      <Card className={classes.projectRecruitmentItem}>
        <CardContent className={classes.projectRecruitmentItemContent}>
          <div style={{ width: '110px', height: '100%' }}>
            <img
              className={classes.projectImage}
              src={
                get(recruitment, ['forProject', 'image']) ||
                PROJECT_IMAGE_DEFAULT
              }
              alt="lab avatar"
            />
          </div>

          <div className={classes.projectRecruitmentInfo}>
            <span
              className={`${classes.projectName} ${classes.projectRecruitmentInfoItem}`}
            >
              {get(recruitment, 'position', 'Vị trí tuyển dụng')}
            </span>
            <span className={classes.projectRecruitmentInfoItem}>
              <WorkOutlineIcon style={{ marginRight: '5px' }} />
              {get(recruitment, ['forProject', 'name'], 'Tên dự án')}
            </span>
            <span className={classes.projectRecruitmentInfoItem}>
              <WorkOutlineIcon style={{ marginRight: '5px' }} />
              {get(recruitment, ['forLab', 'name'], 'tên lab')}
            </span>
            <span className={classes.projectRecruitmentInfoItem}>
              <ScheduleIcon style={{ marginRight: '5px' }} />{' '}
              {get(recruitment, 'createdDate', 'Ngày tạo')}
            </span>
          </div>
        </CardContent>
      </Card>
    </Fade>
  );
}
