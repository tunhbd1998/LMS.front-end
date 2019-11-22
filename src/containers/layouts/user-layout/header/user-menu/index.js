import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { get } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WorkIcon from '@material-ui/icons/Work';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  Container,
  Button,
  Grow,
  Paper,
  ClickAwayListener
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as authActions from '@supporters/store/redux/actions/auth.actions';
import { disableLink } from '@supporters/utils/link';

const useStyles = makeStyles(theme => ({
  button: {
    fontSize: 14,
    color: '#FFFFFF'
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
  loginUserMenu: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  avatar: {
    marginRight: '5px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    overflow: 'hidden'
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontWeight: '600'
  }
}));

function UserMenu({ user, actions }) {
  const AVATAR_DEFAUL = '/media/images/logo/avatar-default.png';
  const classes = useStyles();
  const [isOpenUserMenu, setOpenUserMenu] = React.useState(false);
  const userRef = React.useRef(null);

  React.useEffect(() => {
    if (!get(user, ['profile'])) {
      actions.getProfile();
    }
  });

  const handleToggleUserMenu = () => {
    setOpenUserMenu(!isOpenUserMenu);
  };

  const handleCloseUserMenu = event => {
    if (userRef.current && userRef.current.contains(event.target)) {
      return;
    }

    setOpenUserMenu(false);
  };
  const handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenUserMenu(false);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      {user.token ? (
        <Container
          className={classes.loginUserMenu}
          onClick={handleToggleUserMenu}
          ref={userRef}
        >
          <Avatar
            alt="Remy Sharp"
            className={classes.avatar}
            src={get(user, ['profile', 'avatar']) || AVATAR_DEFAUL}
          />
          <div className={classes.userInfo} style={{}}>
            <span>{get(user, ['profile', 'fullname']) || 'Your name'}</span>
            <ArrowDropDownIcon />
          </div>
        </Container>
      ) : (
        <>
          <Button className={classes.button} href="/sign-in">
            Đăng nhập
          </Button>
          <Button
            className={classes.button}
            ref={userRef}
            onClick={handleToggleUserMenu}
          >
            Đăng ký
          </Button>
        </>
      )}
      <Popper
        open={isOpenUserMenu}
        anchorEl={userRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleCloseUserMenu}>
                <MenuList
                  autoFocusItem={isOpenUserMenu}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                  style={{ padding: '10px 0px' }}
                >
                  {user.token ? (
                    <>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <a
                          href="/"
                          onClick={disableLink}
                          className={classes.subMenuLink}
                        >
                          <AssignmentIndIcon className={classes.spacingOne} />
                          Thông tin cá nhân
                        </a>
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <a
                          href="/favorite-labs"
                          className={classes.subMenuLink}
                        >
                          <FavoriteIcon className={classes.spacingOne} />
                          Các lab yêu thích
                        </a>
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <a href="/" className={classes.subMenuLink}>
                          <WorkIcon className={classes.spacingOne} />
                          Các lab đã tham gia
                        </a>
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <a
                          href="/"
                          onClick={disableLink}
                          className={classes.subMenuLink}
                        >
                          <ExitToAppIcon className={classes.spacingOne} />
                          Đăng xuất
                        </a>
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <a href="sign-up" className={classes.subMenuLink}>
                          <PermIdentityIcon className={classes.spacingOne} />
                          Thành viên
                        </a>
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <a href="/sign-up-lab" className={classes.subMenuLink}>
                          <LocalLibraryIcon className={classes.spacingOne} />
                          Lab
                        </a>
                      </MenuItem>
                    </>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

const mapStateToProps = state => ({
  user: get(state, ['authReducer', 'user'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getProfile: authActions.getProfile
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMenu);
