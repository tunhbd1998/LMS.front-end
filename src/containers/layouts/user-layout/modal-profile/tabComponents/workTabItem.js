import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { H1, Logo, Input, Button, Dropdown } from '@commons/components';
import { get } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: 0
  }
});

const WorkTabItem = ({ profile, editMode, bindWork }) => {
  const classes = useStyles();
  return (
    <Container style={{ padding: 0 }}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Input
            {...get(bindWork, ['bindJob'] || 'null')}
            label="Nghề nghiệp"
            disabled={!editMode}
            defaultValue={get(profile, ['job'] || null)}
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            label="MSSV/MSNV"
            {...get(bindWork, ['bindIDNumber'] || 'null')}
            disabled={!editMode}
            defaultValue={get(profile, ['IDNumber'] || null)}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            label="Nơi Công Tác"
            {...get(bindWork, ['bindUniversity'] || 'null')}
            disabled={!editMode}
            defaultValue={get(profile, ['university'] || null)}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default WorkTabItem;
