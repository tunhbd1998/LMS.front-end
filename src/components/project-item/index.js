import React from 'react';
import { makeStyles, Card, CardContent } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ScheduleIcon from '@material-ui/icons/Schedule';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Fade } from 'react-reveal';

const useStyles = makeStyles(theme => ({
  projectItem: {
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
  projectItemContent: {
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
  projectInfo: {
    width: 'calc(100% - 110px - 30px)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    fontWeight: 'medium',
    boxSizing: 'border-box',
    padding: '5px'
  },
  projectInfoItem: {
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

export default function ProjectItem({ project }) {
  const classes = useStyles();
  const PROJECT_IMAGE_DEFAULT = '/media/images/logo/project-image-default.png';

  return (
    <Fade>
      <Card className={classes.projectItem}>
        <CardContent className={classes.projectItemContent}>
          <div style={{ width: '110px', height: '100%' }}>
            <img
              className={classes.projectImage}
              src={project.image || PROJECT_IMAGE_DEFAULT}
              alt="lab avatar"
            />
          </div>

          <div className={classes.projectInfo}>
            <span
              className={`${classes.projectName} ${classes.projectInfoItem}`}
            >
              {project.name}
            </span>
            <span className={classes.projectInfoItem}>
              <WorkOutlineIcon style={{ marginRight: '5px' }} />
              {project.lab.name}
            </span>
            <span className={classes.projectInfoItem}>
              <ScheduleIcon style={{ marginRight: '5px' }} />{' '}
              {project.createdDate}
            </span>
            <span className={classes.projectInfoItem}>
              <PermIdentityIcon style={{ marginRight: '5px' }} />{' '}
              {project.members} thành viên
            </span>
          </div>
        </CardContent>
      </Card>
    </Fade>
  );
}
