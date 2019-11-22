import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  useMediaQuery
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { majors } from '@commons/data/major';
import { universities } from '@commons/data/university';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(theme => ({
  labItem: {
    width: useMediaQuery('(max-width: 501px)') ? '100%' : '500px',
    height: '120px',
    boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.2)',
    margin: '5px',
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
    height: '100%'
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
    padding: '2px 0px'
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
        <CardContent className={classes.labItemContent}>
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
              {majors[lab.specialize]}
            </span>
            <span className={classes.labInfoItem}>
              {universities[lab.address.province][lab.university]}
            </span>
          </div>
          <FavoriteBorderIcon />
        </CardContent>
      </Card>
    </Fade>
  );
}
