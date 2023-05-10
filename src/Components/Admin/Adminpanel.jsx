import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Col, Row } from 'react-bootstrap';
import Dashboard from './Dashboard';
import '../css/Sidebar.scss';
import '../css/Admin/Header.scss'
import Blogs from './Blogs';

const Adminpanel = (props) => {
  return (
    <>
    <Row className='admin'>
        <Col md={2} className='admin__sidebar'>
          <Sidebar/>
        </Col>
        <Col md={10}>
          <Header/>
          { props.children }
        </Col>  
    </Row>
    </>
  )
}

export default Adminpanel
