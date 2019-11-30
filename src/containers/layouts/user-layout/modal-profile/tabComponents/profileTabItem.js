import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { H1, Logo, Button, Input, Dropdown } from '@commons/components';
import { get } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: 0
  }
});

const ProfileTabItem = ({ profile, editMode, bindProfile }) => {
  const classes = useStyles();
  return (
    <Container style={{ padding: 0 }}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Input
            label="Họ và tên"
            {...get(bindProfile, ['bindfullname'] || 'null')}
            //   defaultValue={get(profile,['fullname'] || 'Your Name')}
            disabled={!editMode}
          />
        </Grid>
        <Grid item xs={3}>
          <Dropdown
            label="Giới tính"
            {...get(bindProfile, ['bindGender'] || 'null')}
            defaultValue={profile.gender === 1 ? 'male' : 'female'}
            data={gender}
            disabled={!editMode}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            label="Số CMND"
            {...get(bindProfile, ['BindIDCardNumber'] || 'null')}
            defaultValue={profile.IDCardNumber}
            disabled={!editMode}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            label="Ngày sinh"
            type="date"
            {...get(bindProfile, ['bindBirthday'] || 'null')}
            defaultValue={get(profile, ['birthday'] || 'null')}
            disabled={!editMode}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            label="Số điện thoại"
            {...get(bindProfile, ['bindPhone'] || 'null')}
            defaultValue={get(profile, ['phone'] || 'null')}
            disabled={!editMode}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            label="Địa chỉ email"
            {...get(bindProfile, ['bindEmail'] || 'null')}
            defaultValue={get(profile, ['email'] || 'null')}
            disabled={!editMode}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default ProfileTabItem;
