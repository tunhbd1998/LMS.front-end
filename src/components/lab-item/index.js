import React from 'react';
import { makeStyles, Card } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import { specializes } from '@commons/data/specialize';
import { universities } from '@commons/data/university';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(theme => ({
  labItem: {
    width: '500px',
    height: '120px',
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
  labItemContent: {
    display: 'flex',
    flexWrap: ' wrap',
    padding: '0px!important',
    width: '100%',
    height: '100%',
    color: 'inherit',
    textDecoration: 'none'
  },
  labImage: {
    width: '100%',
    height: '100%'
  },
  labInfo: {
    width: 'calc(100% - 110px - 30px)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    fontWeight: 'medium',
    boxSizing: 'border-box',
    padding: '5px'
  },
  labInfoItem: {
    padding: '2px 0px',
    display: 'flex',
    alignItem: 'center',
    alignContent: 'center'
  },
  labName: {
    color: '#415764',
    fontWeight: '600',
    fontSize: '16px'
  }
}));

export default function LabItem({ lab }) {
  const classes = useStyles();
  const LAB_IMAGE_DEFAULT = '/media/images/logo/lab-image-default.png';

  return (
    <Fade>
      <Card className={classes.labItem}>
        <a href={`/lab/${lab.id}`} className={classes.labItemContent}>
          <div style={{ width: '110px', height: '100%' }}>
            <img
              className={classes.labImage}
              src={lab.labImage || LAB_IMAGE_DEFAULT}
              alt="lab avatar"
            />
          </div>

          <div className={classes.labInfo}>
            <span className={`${classes.labName} ${classes.labInfoItem}`}>
              {lab.name}
            </span>
            <span className={classes.labInfoItem}>
              <WorkIcon
                style={{ marginRight: '5px', width: '20px', height: '20px' }}
              />
              {specializes[lab.specialize]}
            </span>
            <span className={classes.labInfoItem}>
              <SchoolIcon
                style={{ marginRight: '5px', width: '20px', height: '20px' }}
              />
              {universities[lab.address.province][lab.university]}
            </span>
          </div>
          <FavoriteBorderIcon />
        </a>
      </Card>
    </Fade>
  );
}
