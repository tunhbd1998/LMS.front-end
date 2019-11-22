import React from 'react';
import {
  Container,
  Paper,
  InputBase,
  IconButton,
  Grid,
  Select,
  MenuItem,
  makeStyles,
  useMediaQuery
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { keys, omit } from 'lodash';
import { provinces } from '@commons/data/province';
import { majors } from '@commons/data/major';
import { universities } from '@commons/data/university';

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
    // width: useMediaQuery('(max-width: 738px)') ? '95%' : '738px',
    maxWidth: '738px',
    // width: '738px',
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

export default function SearchArea() {
  const classes = useStyles();
  const [selectedProvince, setProvince] = React.useState(keys(provinces)[0]);
  let filteredUniversities = filterUniversities(selectedProvince);
  const [selectedMajor, setMajor] = React.useState(keys(majors)[0]);
  const [selectedUniversity, setUniversity] = React.useState(
    keys(universities)[0]
  );

  const handleChangeMajor = event => setMajor(event.target.value);

  const handleChangeUniversity = event => setUniversity(event.target.value);

  const handleChangeProvince = event => {
    setProvince(event.target.value);
    filteredUniversities = filterUniversities(selectedProvince);
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
                labelId="major"
                id=""
                value={selectedMajor}
                className={classes.selection}
                onChange={handleChangeMajor}
              >
                {keys(majors).map(id => (
                  <MenuItem key={id} value={id}>
                    {majors[id]}
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
