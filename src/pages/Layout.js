import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';

function Layout(props) {
  const navigate = useNavigate();

  return (
    <>
      {/* 헤더 영역: 상단 내비게이션 바 */}
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => navigate('/')}>Home</Nav.Link>
              <Nav.Link href="#features" onClick={() => navigate('/cart')}>Features</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Outlet />
    </>
  );
}

export default Layout;