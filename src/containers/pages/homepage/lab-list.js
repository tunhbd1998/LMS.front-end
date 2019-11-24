import React from 'react';
import { get, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Button, makeStyles } from '@material-ui/core';
import LabItem from '@components/lab-item';
import { styles } from '@commons/globals/common-styles';
import * as mainActions from '@supporters/store/redux/actions/main.actions';
import Loading from '@components/loading';
import * as fetchDataConfigs from '@commons/configs/fetch-data';

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
    padding: '0px',
    position: 'relative'
  }
}));

function LabList({ labs, token, actions, searchOptions }) {
  const classes = useStyles();

  React.useEffect(() => {
    if (!labs.totalPage || !labs.page || isEmpty(labs.list)) {
      actions.fetchLabs({});
    }
  });

  const loadMoreLabs = () => {
    actions.fetchLabs({
      ...searchOptions,
      page: labs.page + 1,
      pageSize: fetchDataConfigs.LAB_PAGE_SIZE
    });
  };

  return (
    <Container
      style={{
        padding: styles.contentPadding,
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
        {token ? 'Các lab cùng trường với bạn' : 'Các lab'}
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
          {labs.loading ? <Loading /> : null}
        </Container>
        {labs.page && labs.totalPage && labs.page < labs.totalPage ? (
          <Button className={classes.loadMoreButton} onClick={loadMoreLabs}>
            Xem thêm
          </Button>
        ) : null}
      </Container>
    </Container>
  );
}

const mapStateToProps = state => ({
  token: get(state, ['authReducer', 'user', 'token']),
  labs: get(state, ['mainReducer', 'labs']),
  searchOptions: get(state, ['mainReducer', 'searchOptions'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchLabs: mainActions.fetchLabs
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabList);
