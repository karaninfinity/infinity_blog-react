import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className='footer'>
        <Container className='footer__container'>      
            <Row className='footer__row'>
                <Col md={3} xl={3} sm={6}>
                      <h3 className="footer__title">
                          Get in touch
                          <br />
                          <span>
                              With Us
                          </span>
                      </h3>
                      <a className='footer__link' href="/">
                      <img
                        src="https://www.infinitysoftech.co/wp-content/uploads/2023/01/png-02.png"
                        width="230"
                        // height="30"
                        className="d-inline-block align-top footer__logo"
                        alt="logo"
                        />
                      </a>
                </Col> 
                <Col md={3} xl={3} sm={6}>
                        <h4 className='footer__line'>
                          Services
                        </h4>
                    <ul className='footer__list pt-4'>
                        <li><a href="">MERN Stack Solution</a></li>
                        <li><a href="">Web App Development</a></li>
                        <li><a href="">WordPress CMS & Plungs</a></li>
                        <li><a href="">API Development Services</a></li>
                        <li><a href="">Mobile App Development</a></li>
                        <li><a href="">Digital Marketing</a></li>
                    </ul>
                </Col>      
                <Col md={3}>
                    <h4 className='footer__line'>
                        Company
                    </h4>
                    <ul className='footer__list pt-4'>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Terms & Condition</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </Col>      
                <Col md={3}>
                    <h4 className='footer__line'>
                        Contact Info
                    </h4>
                    <address className='pt-4'>
                      Bhagwati Circle, Opposite Annapurna Dining Hall, Kaliyabid, Bhavnagar - 364002, Gujarat India
                    </address>
                    <div className="footer__contacts mt-4">
                          <a className='mb-2' href="mailto:info@infinitysoftech.co"><lord-icon src="https://cdn.lordicon.com/ehfubvwr.json" trigger="loop" delay="2000" colors="primary:#ffffff" style={{ width: '28px', height: '28px', marginRight : '3px'}}></lord-icon>info@infinitysoftech.co</a>
                          <a href="tel:+916359389818"><lord-icon src="https://cdn.lordicon.com/tftaqjwp.json" trigger="loop" delay="2000" colors="primary:#ffffff" style={{ width: '25px', height: '25px', marginRight : '3px'}}></lord-icon>+916359389818</a>
                      </div>  
                </Col>      
            </Row>
            <Row>
                <Col className='footer__rights mt-5' md={9} sm={8} xl={10}>
                    <p>©2023 Infinity Softech. All rights reserved</p>      
                </Col>
                  <Col md={3} sm={4} xl={2} className='mt-5'>
                    <ul className='footer__social'>
                          <li><a href="">
                              <img width='35' src="https://www.infinitysoftech.co/wp-content/uploads/2022/11/facebook.png" alt="" />
                          </a></li>
                          <li><a href="">
                              <img width='35' src="https://www.infinitysoftech.co/wp-content/uploads/2022/11/instagram.png" alt="" />
                          </a></li>
                          <li><a href="">
                              <img width='35' src="https://www.infinitysoftech.co/wp-content/uploads/2022/11/linkedin.png" alt="" />
                          </a></li>
                          <li><a href="">
                              <img width='35' src="https://www.infinitysoftech.co/wp-content/uploads/2022/11/twitter.png" alt="" />
                          </a></li>
                    </ul>      
                </Col>  
            </Row>
        </Container>
    </footer>
  )
}
