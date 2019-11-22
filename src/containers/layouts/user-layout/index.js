import React from 'react';
import { Container } from '@material-ui/core';
import Header from './header';
import SearchArea from './search-area';
import Footer from './footer';

export default function UserLayout({ children }) {
  return (
    <Container className="user-layout" style={{ width: '100%', padding: '0' }}>
      <Header />
      <SearchArea />
      <Container style={{ width: '100%', padding: '0px' }}>
        {children}
      </Container>
      <Footer />
    </Container>
  );
}
