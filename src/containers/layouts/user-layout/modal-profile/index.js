import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Avatar from '@material-ui/core/Avatar';
import * as authActions from '@supporters/store/redux/actions/auth.actions';
import {get} from 'lodash'
import GeneralProfile from './generalProfile'
import ProfileTabs from './tabProfile'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    backgroundColor: '#109CF1',
    color:"white",
    padding: '5px 20px',
    marginBottom:10,
    '&:hover': {
        boxShadow:'0px 4px 10px rgba(16, 156, 241, 0.24)',
        backgroundColor: '#109CF1',
        color:"white",
    }
  },  
  close : {
    color: '#109CF1',
    position:'absolute',
    top:10,
    right:10,
    fontSize:'2rem',
    '&:hover':{
      cursor:'pointer'
    }
  },
  paper: {
    backgroundColor: '#F5F6F8',
    minHeight:650,
    maxHeight:690,
    minWidth:1200,
    maxWidth:1200,
    position:'relative',
    display:'flex',
  },
  spacingOne: {
    marginRight: 2
  },
  subMenuLink: {
    fontSize: '14px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    color: '#415764',
    padding: '0px 20px'
  },
  centerSelf: {
    alignSelf:'center'
  }
}));

function Profile({profile, actions,editMode}) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  console.log(actions);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <a
        href="javascript:void(0)"
        onClick={handleOpen}
        className={classes.subMenuLink}
      >
        <AssignmentIndIcon className={classes.spacingOne} />
        Thông tin cá nhân
      </a>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container direction="row" justify="center">
            <CloseIcon onClick ={handleClose} className={classes.close} />
              <Grid item xs={3} className = {classes.centerSelf}>
                <GeneralProfile profile = {profile} actions = {actions} />
              </Grid>
              <Grid item xs={9} className = {classes.centerSelf}>
                <ProfileTabs profile = {profile} actions = {actions} editMode = {editMode}/>
              </Grid>
            </Grid>
            <Button style={{position: 'absolute',bottom:'0',left:'50%',transform:'translateX(-50%)' }} className={classes.button} onClick={handleClose}>ĐÓNG</Button> 
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

// const mapStateToProps = state => ({
//   user: get(state, ['authReducer', 'user'])
// });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      uploadAvatar: authActions.uploadAvatar,
      modeEditOn: authActions.modeEditOn,
      modeEditOff: authActions.modeEditOff,
    },
    dispatch
  )
});

export default connect(null,mapDispatchToProps)(Profile);