import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { keys, omit } from 'lodash';
import {
  Container,
  Paper,
  InputBase,
  IconButton,
  Grid,
  Select,
  MenuItem,
  makeStyles
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { provinces } from '@commons/data/province';
import { specializes } from '@commons/data/specialize';
import { universities } from '@commons/data/university';
import {
  fetchLabs as fetchLabsAction,
  updateSearchOptions as updateSearchOptionsAction
} from '@supporters/store/redux/actions/main.actions';
import * as fetchDataConfigs from '@commons/configs/fetch-data';

const useStyles = makeStyles(theme => ({
  searchArea: {
    width: '100%',
    height: '336px',
    background: 'url("/media/images/banner/banner.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    color: '#415764'
  },
  searchAreaContent: {
    maxWidth: '738px',
    height: 'auto'
  },
  bannerTitle: {
    fontSize: '40px',
    color: '#fff',
    textAlign: 'center',
    display: 'block'
  },
  selection: {
    background: '#fff',
    padding: '10px',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '4px',
    overflow: 'hidden'
  }
}));

const filterUniversities = provinceId => {
  let filteredUniversities = {
    all: universities.all
  };

  if (provinceId === 'all') {
    keys(omit(universities, ['all'])).forEach(id => {
      filteredUniversities = {
        ...filteredUniversities,
        ...universities[id]
      };
    });
  } else {
    filteredUniversities = {
      ...filteredUniversities,
      ...universities[provinceId]
    };
  }

  return filteredUniversities;
};

function SearchArea({ actions }) {
  const classes = useStyles();
  const [selectedProvince, setProvince] = React.useState(keys(provinces)[0]);
  let filteredUniversities = filterUniversities(selectedProvince);
  const [selectedSpecialize, setSpecialize] = React.useState(
    keys(specializes)[0]
  );
  const [selectedUniversity, setUniversity] = React.useState(
    keys(universities)[0]
  );
  const [name, setName] = React.useState('');

  const fetchLabs = () => {
    actions.fetchLabs({
      name,
      university: selectedUniversity,
      specialize: selectedSpecialize,
      province: selectedProvince,
      page: 1,
      pageSize: fetchDataConfigs.LAB_PAGE_SIZE
    });
  };

  const updateSearchOptions = () => {
    actions.updateSearchOptions({
      university: selectedUniversity,
      province: selectedProvince,
      specialize: selectedSpecialize,
      name
    });
  };

  const handleChangeSpecialize = event => {
    setSpecialize(event.target.value);

    updateSearchOptions();
    fetchLabs();
  };

  const handleChangeUniversity = event => {
    setUniversity(event.target.value);

    updateSearchOptions();
    fetchLabs();
  };

  const handleChangeProvince = event => {
    setProvince(event.target.value);
    filteredUniversities = filterUniversities(selectedProvince);
    setUniversity('all');

    updateSearchOptions();
    fetchLabs();
  };

  const handleChangeName = event => {
    setName(event.target.value);

    updateSearchOptions();
    fetchLabs();
  };

  return (
    <Container className={classes.searchArea}>
      <Container className={classes.searchAreaContent}>
        <span className={classes.bannerTitle}>
          123 laboratory khắp Việt Nam
          <br /> thuộc 20+ trường đại học
        </span>
        <Container>
          <Paper
            component="form"
            style={{
              padding: '0px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <InputBase
              style={{ width: '90%' }}
              placeholder="Tìm kiếm lab"
              defaultValue={name}
              onChange={handleChangeName}
              inputProps={{ 'aria-label': 'Tìm kiếm lab' }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <Grid
            container
            spacing={2}
            style={{ marginTop: '10px', height: '51px' }}
          >
            <Grid item xs={3}>
              <Select
                className={classes.selection}
                labelId="province"
                id=""
                value={selectedProvince}
                onChange={handleChangeProvince}
              >
                {keys(provinces).map(id => (
                  <MenuItem key={id} value={id}>
                    {provinces[id]}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={5}>
              <Select
                className={classes.selection}
                labelId="university"
                id=""
                value={selectedUniversity}
                onChange={handleChangeUniversity}
              >
                {keys(filteredUniversities).map(id => (
                  <MenuItem key={id} value={id}>
                    {filteredUniversities[id]}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Select
                labelId="specialize"
                id=""
                value={selectedSpecialize}
                className={classes.selection}
                onChange={handleChangeSpecialize}
              >
                {keys(specializes).map(id => (
                  <MenuItem key={id} value={id}>
                    {specializes[id]}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Container>
  );
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchLabs: fetchLabsAction,
      updateSearchOptions: updateSearchOptionsAction
    },
    dispatch
  )
});

export default connect(
  null,
  mapDispatchToProps
)(SearchArea);
