import React from 'react';
import { Container } from '@material-ui/core';
import { Logo } from './logo';
import { Button } from './button';

export default function NotPermission() {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <div style={{ width: '400px', padding: '20px' }}>
        <Logo />
        <br />
        Bạn không có quyền truy cập trang này. Hãy trở về trang chủ nào.
        <br />
        <Button type="link" variant="contained" color="primary" href="/">
          Trang chủ
        </Button>
      </div>
    </Container>
  );
}
