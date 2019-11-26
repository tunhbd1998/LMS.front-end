
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { disableLink } from '@supporters/utils/link';
import Avatar from '@material-ui/core/Avatar';
import * as authActions from '@supporters/store/redux/actions/auth.actions';
import {get} from 'lodash'


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height:150
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    minHeight:600,
    minWidth:1200,
    
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
}));

function Profile({profile, actions}) {
  const AVATAR_DEFAUL = '/media/images/logo/avatar-default.png';
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  console.log(actions);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeInputImage = (e) => {
    const fileUpload = e.target.files[0];
    const formData = new FormData();
    console.log('actions',actions);

    formData.append('avatar',fileUpload);

    actions.uploadAvatar(formData);
  }

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
            <Avatar
              alt="test"
              className={classes.avatar}
              src={get(profile, ['avatarImage']) || AVATAR_DEFAUL}
            />
            <label htmlFor="raised-button-file">
                <input
                accept="image/*"
                className={classes.input}
                style={{ display: 'none' }}
                id="raised-button-file"
                onChange = {handleChangeInputImage}
                
                type="file"
                />
                <Button variant="raised" component="span" className={classes.button}>
                    Upload
                </Button>
            </label> 
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
      uploadAvatar: authActions.uploadAvatar
    },
    dispatch
  )
});

export default connect(null,mapDispatchToProps)(Profile);