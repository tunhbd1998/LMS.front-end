import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import Fab from '@material-ui/core/Fab';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {get} from 'lodash';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProfileTabItem from './tabComponents/profileTabItem';
import WorkTabItem from './tabComponents/workTabItem';
import { useInput} from './testHook';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={5} style={{padding:'15px 30px 50px 30px'}}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    width: '95%',
    margin:"auto",
    minHeight:530,
    maxHeight:600,
    borderRadius: '5px',
    background:'white',
    boxShadow:'2px 4px 10px 0 rgba(0,0,0,0.3)',
    // #109CF1
    position:'relative'
  },
  customBar:{
    color:'#109CF1',
    backgroundColor:'#fff',
    borderRadius:'5px 5px 0 0',
    boxShadow:'unset'
  },
  customTabs:{
    '& > div > span':{
      backgroundColor:'#109CF1',
      height:'3px',
      borderRadius: '5px'
    }
      // backgroundColor:"#fff"
    
  },
  editIcon:{
    backgroundColor:'#109CF1',
    color:'white',
    position:'absolute',
    right:5,
    bottom:5,
    width:'45px',
    height:'45px'
  },
  
});

export default function ProfileTabs({profile,actions,editMode}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const { value: newfullname, bind: bindfullname } = useInput(get(profile,['fullname'] || 'null'));
  const { value: newGender, bind: bindGender} = useInput(get(profile,['gender'] || 'null'))
  const { value: newIDCardNumber, bind: bindIDCardNumber} = useInput(get(profile,['IDCardNumber'] || 'null'))
  const { value: newBirthday, bind: bindBirthday} = useInput(get(profile,['birthday'] || 'null'))
  const { value: newPhone, bind: bindPhone} = useInput(get(profile,['phone'] || 'null'))
  const { value: newEmail, bind: bindEmail} = useInput(get(profile,['email'] || 'null'))
  const { value: newjob, bind: bindJob} = useInput(get(profile,['job'] || 'null'))
  const { value: newIDNumber, bind: bindIDNumber} = useInput(get(profile,['IDNumber'] || 'null'))
  const { value: newUniversity, bind: bindUniversity} = useInput(get(profile,['university'] || 'null'))

  const forProfileTab = {
    bindfullname,
    bindGender,
    bindIDCardNumber,
    bindBirthday,
    bindPhone,
    bindEmail
  }
  const forWorkTab = {
    bindJob,
    bindIDNumber,
    bindUniversity
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    if (editMode){
      actions.modeEditOff()
    }
    else{
      actions.modeEditOn()
    }
    console.log('test')
    console.log('profile',forProfileTab,'work',forWorkTab)
  }
  const changeModeEdit = () => {
    return editMode ? actions.modeEditOff() :actions.modeEditOn()
  }
  return (
    <div className={classes.root}>
      <form onSubmit = {handleSubmitUpdate}>
        <AppBar position="static" className={classes.customBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.customTabs}
          >
            <Tab label="THÔNG TIN CÁ NHÂN" {...a11yProps(0)} />
            <Tab label="CÔNG VIỆC" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        
        <TabPanel value={value} index={0}>
          <ProfileTabItem profile = {profile} editMode={editMode} bindProfile={forProfileTab}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <WorkTabItem profile = {profile}  editMode={editMode} bindWork = {forWorkTab}/>
        </TabPanel>
        <Fab color="primary" aria-label="edit" className = {classes.editIcon} type={editMode ? 'submit' : '' } >
          {editMode ?<DoneIcon /> : <EditIcon /> }
        </Fab>
        </form>
    </div>
  );
}
