import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLabAdmin, NavLabAdminProject } from '@components/nav';
import { HeaderDashboard } from '@components/header-dashboard';
import {
  Paper,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton
} from '@material-ui/core';
import { Clear, CalendarToday, FilterList } from '@material-ui/icons';
import { Input, Button, Dropdown } from '@commons/components';

function MemberScheduleItem({ onRemoveSchedule }) {
  const [day, setday] = useState(2);
  const [start, setstart] = useState('');
  const [end, setend] = useState('');

  return (
    <>
      <Grid item xs={3}>
        <Dropdown
          label="&nbsp;"
          id="i1"
          value={day}
          onChange={e => setday(e.target.value)}
          data={[
            { label: 'Thứ 2', value: 2 },
            { label: 'Thứ 3', value: 3 },
            { label: 'Thứ 4', value: 4 },
            { label: 'Thứ 5', value: 5 },
            { label: 'Thứ 6', value: 6 },
            { label: 'Thứ 7', value: 7 }
          ]}
        />
      </Grid>
      <Grid item xs={4}>
        <Input
          id="i2"
          label="Bắt đầu"
          value={start}
          handleChange={e => setstart(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Input
          id="i3"
          label="Kết thúc"
          value={end}
          handleChange={e => setend(e.target.value)}
        />
      </Grid>
      <Grid
        item
        xs={1}
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'flex-end',
          marginBottom: 4
        }}
      >
        <IconButton onClick={onRemoveSchedule}>
          <Clear color="secondary" />
        </IconButton>
      </Grid>
    </>
  );
}

function MemberSchedule() {
  const [schedules, setschedules] = useState([1]);

  return (
    <>
      {schedules.map((s, i) => (
        <MemberScheduleItem
          key={i}
          onRemoveSchedule={() =>
            setschedules(schedules.filter((s, i2) => i !== i2))
          }
        />
      ))}

      <Grid item xs={6} onClick={() => setschedules(schedules.concat([1]))}>
        <Button color="primary" variant="outlined">
          thêm lịch làm việc
        </Button>
      </Grid>
    </>
  );
}

class ScheduleManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <NavLabAdmin />
        <div
          style={{
            width: '100%',
            height: '100vh',
            flex: 1,
            overflowY: 'scroll',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <HeaderDashboard
            breadcrums={[
              { label: 'Viện khoa học không gian Hồ Chí Minh', to: '#' },
              { label: 'Khám phá ngôi xao xa ơi là xa', to: '#' },
              { label: 'Lịch làm việc', to: '#' }
            ]}
          />
          <div style={{ padding: 10, flex: 1, display: 'flex' }}>
            <NavLabAdminProject style={{ marginRight: 20 }} />

            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center'
                }}
              >
                <div />
                <div style={{ display: 'flex' }}>
                  <IconButton style={{ marginRight: 8 }}>
                    <FilterList />
                  </IconButton>
                  <IconButton>
                    <CalendarToday />
                  </IconButton>
                </div>
              </div>

              {[1, 2, 3, 4].map(t => (
                <Paper
                  key={t}
                  elevation={2}
                  style={{
                    padding: 20,
                    marginTop: 20,
                    boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar
                              src="/media/images/logo/logo192.png"
                              alt="avatar"
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary="Nguyễn Huy Hùng"
                            secondary="Viện trưởng đại học Adam Eva"
                          />
                        </ListItem>
                      </List>
                    </Grid>

                    <MemberSchedule />
                  </Grid>
                </Paper>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(ScheduleManagement));
