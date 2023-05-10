import React, { useEffect, useState } from 'react'
import Api_url from '../Request';
import axios from 'axios';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { MdWidgets } from 'react-icons/md';
import './css/bloglist.scss'

const Bloglist = () => {
    const [Blog, setBlog] = useState([]);
    useEffect(() => {
        axios.get(`${Api_url}/blog`, {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
          }
        })
            .then(result => {
                console.log(result.data);
                setBlog(result.data);
            })
      },[])
  return (
      <>
          <Container>
              <Row className='bloglist'>
                  <Col md={8}>
                        <div className='d-flex flex-wrap justify-content-between'>
                        {
                              Blog.map(item => (
                                  <Card className='bloglist__card mb-5 border-0' key={item.bId}>
                                    <Card.Img variant="top" src='data:image/jpeg;base64,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'/>
                                    <div className="card-body">
                                            <div className="card-title">
                                              <h4>{ item.vBlogTitle }</h4>  
                                            </div>
                                          <h5>{ item.vBlogDescription  }</h5>
                                    </div>
                                  </Card>
                              ))
                        }
                        </div>      
                  </Col>
                  <Col md={4} className='Blogsidebar'>
                        <div className="Blogsidebar__widget d-flex pb-3">
                          <MdWidgets />
                          <h4 className='ms-2 m-0'>Add Widget</h4>
                        </div>
                        <div className="Blogsidebar__cardwrapper mt-3">
                        <Row className='justify-content-around m-0'>  
                            <Card className='col-md-6 p-4 rounded-4 Blogsidebar__blog-card border-0'>
                                    <Card className='rounded-4'>
                                      <Image src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" rounded />
                                    </Card>
                                    <div className="Blogsidebar__blog-discription row p-0  py-3">
                                            <Col md={2} className='rounded Blogsidebar__blog-logo p-0 ps-2'>
                                                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GHFzicMYaZPHv7YBikNwffrogSMVnTvLsQ&usqp=CAU' />
                                            </Col>
                                            <Col md={10} className='d-flex align-items-center'>
                                                <h4>insight</h4>
                                            </Col>
                                            <p className='m-0 py-3'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt numquam recusandae quas dolores alias!
                                            </p>
                                    </div>
                            </Card>
                            <Card className='col-md-6 p-4 rounded-4 Blogsidebar__blog-card border-0'>
                                    <Card className='rounded-4'>
                                      <Image src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" rounded />
                                    </Card>
                                    <div className="Blogsidebar__blog-discription row p-0  py-3">
                                            <Col md={2} className='rounded Blogsidebar__blog-logo p-0 ps-2'>
                                                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GHFzicMYaZPHv7YBikNwffrogSMVnTvLsQ&usqp=CAU' />
                                            </Col>
                                            <Col md={10} className='d-flex align-items-center'>
                                                <h4>insight</h4>
                                            </Col>
                                            <p className='m-0 py-3'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt numquam recusandae quas dolores alias!
                                            </p>
                                    </div>
                            </Card>
                            <Card className='col-md-5 p-4 rounded-4 Blogsidebar__blog-card border-0 my-3'>
                                    <Card className='rounded-4'>
                                      <Image src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" rounded />
                                    </Card>
                                    <div className="Blogsidebar__blog-discription row p-0  py-3">
                                            <Col md={2} className='rounded Blogsidebar__blog-logo p-0 ps-2'>
                                                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GHFzicMYaZPHv7YBikNwffrogSMVnTvLsQ&usqp=CAU' />
                                            </Col>
                                            <Col md={10} className='d-flex align-items-center'>
                                                <h4>insight</h4>
                                            </Col>
                                            <p className='m-0 py-3'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt numquam recusandae quas dolores alias!
                                            </p>
                                    </div>
                            </Card>
                            <Card className='col-md-5 p-4 rounded-4 Blogsidebar__blog-card border-0 my-3'>
                                    <Card className='rounded-4'>
                                      <Image src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" rounded />
                                    </Card>
                                    <div className="Blogsidebar__blog-discription row p-0  py-3">
                                            <Col md={2} className='rounded Blogsidebar__blog-logo p-0 ps-2'>
                                                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GHFzicMYaZPHv7YBikNwffrogSMVnTvLsQ&usqp=CAU' />
                                            </Col>
                                            <Col md={10} className='d-flex align-items-center'>
                                                <h4>insight</h4>
                                            </Col>
                                            <p className='m-0 py-3'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt numquam recusandae quas dolores alias!
                                            </p>
                                    </div>
                            </Card>  
                        </Row>      
                        </div>
                  </Col>
              </Row>
          </Container>
      </>
  )
}

export default Bloglist
