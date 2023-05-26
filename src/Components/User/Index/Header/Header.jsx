import React from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <>
            <header className="header">
                <Container>
                    <Row className="header__row">
                        <Col md={3}>
                            <a href="/">
                                <img
                                    src="https://www.infinitysoftech.co/wp-content/uploads/2023/02/logo-black-text.png"
                                    width="160"
                                    // height="30"
                                    className="d-inline-block align-top"
                                    alt="logo"
                                />
                            </a>
                        </Col>
                        <Col md={9}>
                            <Nav className="header__nav">
                                <Link className="navbar-link" to="/services">
                                    Services
                                </Link>
                                <Link className="navbar-link" to="/products">
                                    Products
                                </Link>
                                <Link className="navbar-link" to="/portfolio">
                                    Protfolio
                                </Link>
                                <Link className="navbar-link" to="/aboutus">
                                    About Us
                                </Link>
                                <Link className="navbar-link" to="/contactus">
                                    Contact Us
                                </Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
}
