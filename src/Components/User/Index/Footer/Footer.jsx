import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './Footer.scss';
import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="footer">
            <Container className="footer__container">
                <Row className="footer__row">
                    <Col className="footer__col" lg={3} md={6} sm={6}>
                        <h3 className="footer__title title_line">
                            Get in touch{' '}
                            <span className="footer__title_with-us">
                                with Us
                            </span>
                        </h3>
                        <a className="footer__link" href="/">
                            <img
                                src="https://www.infinitysoftech.co/wp-content/uploads/2023/01/png-02.png"
                                width="230"
                                // height="30"
                                className="footer__logo"
                                alt="logo"
                            />
                        </a>
                    </Col>
                    <Col className="footer__col" lg={3} md={6} sm={6}>
                        <h5 className="footer__line title_line">Services</h5>
                        <ul className="footer__list">
                            <li>
                                <a href="" className="white-color">
                                    MERN Stack Solution
                                </a>
                            </li>
                            <li>
                                <a href="" className="white-color">
                                    Web App Development
                                </a>
                            </li>
                            <li>
                                <a href="" className="white-color">
                                    WordPress CMS & Plungs
                                </a>
                            </li>
                            <li>
                                <a href="" className="white-color">
                                    API Development Services
                                </a>
                            </li>
                            <li>
                                <a href="" className="white-color">
                                    Mobile App Development
                                </a>
                            </li>
                            <li>
                                <a href="" className="white-color">
                                    Digital Marketing
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="footer__col" lg={3} md={6} sm={6}>
                        <h5 className="footer__line title_line">Company</h5>
                        <ul className="footer__list">
                            <li>
                                <a href="" className="white-color">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="" className="white-color">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="" className="white-color">
                                    Terms & Condition
                                </a>
                            </li>
                            <li>
                                <a href="" className="white-color">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="footer__col" lg={3} md={6} sm={6}>
                        <h5 className="footer__line title_line">
                            Contact Info
                        </h5>
                        <div className="footer__list">
                            <p className="footer__address white-color">
                                Bhagwati Circle, Opposite Annapurna Dining Hall,
                                Kaliyabid, Bhavnagar - 364002, Gujarat India
                            </p>
                            <div className="footer__contacts">
                                <a
                                    className="white-color"
                                    href="mailto:info@infinitysoftech.co"
                                >
                                    <lord-icon
                                        src="https://cdn.lordicon.com/ehfubvwr.json"
                                        trigger="loop"
                                        delay="2000"
                                        colors="primary:#ffffff"
                                        style={{
                                            width: '28px',
                                            height: '28px',
                                            marginRight: '3px',
                                        }}
                                    ></lord-icon>
                                    info@infinitysoftech.co
                                </a>
                                <a
                                    href="tel:+916359389818"
                                    className="white-color"
                                >
                                    <lord-icon
                                        src="https://cdn.lordicon.com/tftaqjwp.json"
                                        trigger="loop"
                                        delay="2000"
                                        colors="primary:#ffffff"
                                        style={{
                                            width: '25px',
                                            height: '25px',
                                            marginRight: '3px',
                                        }}
                                    ></lord-icon>
                                    +916359389818
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="footer__copyright">
                    <Col className="footer__rights" md={9} sm={12} xl={10}>
                        <p className="white-color">
                            ©2023{' '}
                            <a
                                href="https://www.infinitysoftech.co/"
                                className="white-color"
                            >
                                Infinity Softech
                            </a>
                            . All rights reserved
                        </p>
                    </Col>
                    <Col className="footer__social-menu" md={3} sm={12} xl={2}>
                        <ul className="footer__social">
                            <li>
                                <a href="">
                                    <img
                                        width="35"
                                        src="https://www.infinitysoftech.co/wp-content/uploads/2022/11/facebook.png"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        width="35"
                                        src="https://www.infinitysoftech.co/wp-content/uploads/2022/11/instagram.png"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        width="35"
                                        src="https://www.infinitysoftech.co/wp-content/uploads/2022/11/linkedin.png"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        width="35"
                                        src="https://www.infinitysoftech.co/wp-content/uploads/2022/11/twitter.png"
                                        alt=""
                                    />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
