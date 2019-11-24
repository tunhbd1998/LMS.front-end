import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    background: '#109CF1',
    width: '100%',
    height: '129px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  logo: {
    width: '39px',
    height: '31px',
    marginBottom: '20px'
  },
  links: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Container className={classes.footer}>
      <img
        className={classes.logo}
        src="/media/images/logo/logo-header.png"
        alt="logo"
      />
      <Container className={classes.links}>
        <a className={classes.link} href="/contact">
          Về chúng tôi
        </a>
        <a className={classes.link} href="/gioi-thieu">
          Giới thiệu
        </a>
        <a className={classes.link} href="/dieu-khoan-chinh-sach">
          Điệu khoản - chính sách
        </a>
        <a className={classes.link} href="/goi-y">
          Gợi ý
        </a>
        <a className={classes.link} href="/ho-tro">
          Hỗ trợ
        </a>
      </Container>
    </Container>
  );
}
