import React from 'react';
import { Container, makeStyles, Fab, Toolbar } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { styles } from '@commons/globals/common-styles';
import Header from './header';
import SearchArea from './search-area';
import Footer from './footer';
import ScrollTop from './scroll-top';

const useStyles = makeStyles(theme => ({
  goToTopButton: {
    position: 'fixed',
    bottom: '150px',
    right: '20px',
    background: '#fff',
    borderRadius: '4px',
    color: '#415764',
    padding: '10px',
    width: 'auto',
    minWidth: '0',
    '&:hover': {
      background: styles.colorBlue,
      color: '#fff'
    }
  }
}));
export default function UserLayout(props) {
  const classes = useStyles();
  const { children } = props;

  const scrollHomepage = event => {
    console.log('event scroll', event);
  };

  return (
    <>
      <Container
        className="user-layout"
        style={{ width: '100%', padding: '0' }}
        onScroll={scrollHomepage}
      >
        <span id="back-to-top-anchor" />
        <Header />
        <SearchArea />
        <Container style={{ width: '100%', padding: '0px' }}>
          {children}
        </Container>
        <Footer />
      </Container>
      <ScrollTop {...props}>
        {/* <Fab color="secondary" size="small" aria-label="scroll back to top"> */}
        <KeyboardArrowUpIcon />
        {/* </Fab> */}
      </ScrollTop>
    </>
  );
}
