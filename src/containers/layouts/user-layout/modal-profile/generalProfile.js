import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {Button} from '@material-ui/core';
import {get} from 'lodash'
import PublishIcon from '@material-ui/icons/Publish';


const useStyles = makeStyles(theme => ({
    textCenter: {
        textAlign:'center'
    },
    button: {
        backgroundColor: '#109CF1',
        color:"white",
        padding: 10,
        marginBottom:15,
        '&:hover': {
            boxShadow:'0px 4px 10px rgba(16, 156, 241, 0.24)',
            backgroundColor: '#109CF1',
            color:"white",
        }
    },
    avatar: {
        width: 200,
        height:200,
        margin:'auto',
        boxShadow: "0 2px 10px 0 rgba(0,0,0,0.4)",
        marginBottom:15,
    },
    uploadIcon:{
        width:21,
        height:21,
        padding: "0 5px",

    },
    nameTitle : {
        fontWeight:'800',
        fontSize: '16px',
        marginBottom:5,
    },
    email : {
        fontSize:14,
        fontStyle: 'italic',
    }
}))

const GeneralProfile = ({profile,actions}) => {
    const classes = useStyles();
    const AVATAR_DEFAUL = '/media/images/logo/avatar-default.png';
    const handleChangeInputImage = (e) => {
        const fileUpload = e.target.files[0];
        const formData = new FormData();
        
    
        formData.append('avatar',fileUpload);

        actions.uploadAvatar(formData);
    }

    return (
        <div className={classes.textCenter}>
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
                <Button variant="raised" color="primary" component="span" className={classes.button}>
                    <PublishIcon className={classes.uploadIcon}/> CẬP NHẬT ẢNH
                </Button>
            </label> 
            <div className={classes.nameTitle}>{get(profile,['fullname'] || 'YOUR NAME')}</div>
            <div className={classes.email}>{get(profile,['email'] || 'YOUR EMAIL')}</div>
        </div>
    )
}
export default GeneralProfile;