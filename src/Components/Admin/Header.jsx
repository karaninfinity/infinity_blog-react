import React from 'react';
import '../css/Admin/Header.scss';
import { Col, Row } from 'react-bootstrap';
import {HiMenu} from 'react-icons/hi'

function Header(){
  return (
    <header className="Adminheader">
          <Row className='Adminheader__nav'>
              <Col md={9}>
                  <HiMenu/>
              </Col>
              <Col md={3}>
              </Col>
          </Row>     
    </header>
  )
}

export default Header
