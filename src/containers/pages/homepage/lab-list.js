import React from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';
import {
  Container,
  Button,
  makeStyles,
  useMediaQuery,
  CircularProgress
} from '@material-ui/core';
import LabItem from '@components/lab-item';
import { styles } from '@commons/globals/common-styles';

const useStyles = makeStyles(theme => ({
  loadMoreButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    padding: '5px 30px',
    fontSize: '12px',
    color: styles.mainTextColor,
    border: `1px solid ${styles.colorBlue}`,
    '&:hover': {
      background: styles.colorBlue,
      color: '#fff'
    }
  },
  itemList: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '0px'
  }
}));

function LabList({ labs }) {
  const classes = useStyles();

  const loadMoreLabs = () => {};

  return (
    <Container
      style={{
        padding: useMediaQuery('(max-width: 576px)')
          ? '0px 10px'
          : styles.contentPadding,
        paddingTop: '20px',
        paddingBottom: '20px',
        background: '#E0E0E0'
      }}
    >
      <span
        style={{
          textAlign: 'center',
          display: 'block',
          padding: '20px 0px',
          fontSize: '30px',
          color: styles.mainTextColor
        }}
      >
        Cac lab
      </span>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          padding: '0px'
        }}
      >
        <Container className={classes.itemList}>
          {labs.list.map(lab => (
            <LabItem key={lab.id} lab={lab} />
          ))}
          {labs.length === 0 ? <CircularProgress /> : null}
        </Container>
        <Button className={classes.loadMoreButton} onClick={loadMoreLabs}>
          Xem thêm
        </Button>
      </Container>
    </Container>
  );
}

const mapStateToProps = state => ({
  labs: get(state, ['mainReducer', 'labs'])
});

export default connect(
  mapStateToProps,
  null
)(LabList);
