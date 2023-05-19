import React from 'react';
import { Navbar, Container, Nav, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function Header(props) {
  return (
    <>
      <header className='header py-4'>
        <Navbar className='py-0'>
          <Container>
            <Col md={4}>
              <a href="/">
                <img
                  src="https://www.infinitysoftech.co/wp-content/uploads/2023/02/logo-black-text-1536x435.png"
                  width="160"
                  // height="30"
                  className="d-inline-block align-top"
                  alt="logo"
                />
              </a>
            </Col>
            <Nav className="justify-content-end header__navlink">
              <Link className='mx-3 text-uppercase header__link text-dark' to="/services">Services</Link>
              <Link className='mx-3 text-uppercase header__link text-dark' to="/products">Products</Link>
              <Link className='mx-3 text-uppercase header__link text-dark' to="/portfolio">Protfolio</Link>
              <Link className='mx-3 text-uppercase header__link text-dark' to="/aboutus">About Us</Link>
              <Link className='mx-3 text-uppercase header__link text-dark' to="/contactus">Contact Us</Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      {/* <Outlet/> */}
    </>
  )
}
