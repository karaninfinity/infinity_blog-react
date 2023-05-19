import React, { useEffect, useState } from 'react'
import Api_url from '../../../Request';
import axios from 'axios';
import { Card, Col, Container, Image, NavItem, Row } from 'react-bootstrap';
import { MdWidgets } from 'react-icons/md';
import './Bloglist.scss';
import blogImage from '../../Images/blog_01.png'

let Blogs = {
    Title: "Lorem ipsum dolor sit.",
    Comments: "2 comments",
    Category: "Photography"
}

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
    }, [])
    return (
        <>
            <Container>
                <Row className='Bloglist'>
                    <Col md={8} className='Bloglist__wrapper'>
                        {
                            Blog.map(item => (
                                <div className="Bloglist__blogs col-md-6">
                                    <img src={blogImage} alt="" className='Bloglist__blogImage' />
                                    <div className='Bloglist__category'>
                                        <small>{item.vCategoryName}</small>
                                    </div>
                                    <div className="Bloglist__content">
                                        <h3 className='Bloglist__title'>{item.vBlogTitle}</h3>
                                        <span>By Dream-Theme</span>
                                        <span className='Bloglist__comments ms-3'>{Blogs.Comments}</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi obcaecati deserunt odio alias porro quod, molestias nesciunt! Quibusdam, id tempore.</p>
                                        <div className='Bloglist__articles'>
                                            <strong><a href="" className='text-decoration-none text-dark'>Read Article</a></strong>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
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
                                            <Image height={`30px`} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GHFzicMYaZPHv7YBikNwffrogSMVnTvLsQ&usqp=CAU' />
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
                                            <Image height={`30px`} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GHFzicMYaZPHv7YBikNwffrogSMVnTvLsQ&usqp=CAU' />
                                        </Col>
                                        <Col md={10} className='d-flex align-items-center'>
                                            <h4>insight</h4>
                                        </Col>
                                        <p className='m-0 py-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt numquam recusandae quas dolores alias!
                                        </p>
                                    </div>
                                </Card>
                                <Card className='col-md-6 p-4 rounded-4 Blogsidebar__blog-card border-0 my-3'>
                                    <Card className='rounded-4'>
                                        <Image src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" rounded />
                                    </Card>
                                    <div className="Blogsidebar__blog-discription row p-0  py-3">
                                        <Col md={2} className='rounded Blogsidebar__blog-logo p-0 ps-2'>
                                            <Image height={`30px`} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GHFzicMYaZPHv7YBikNwffrogSMVnTvLsQ&usqp=CAU' />
                                        </Col>
                                        <Col md={10} className='d-flex align-items-center'>
                                            <h4>insight</h4>
                                        </Col>
                                        <p className='m-0 py-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt numquam recusandae quas dolores alias!
                                        </p>
                                    </div>
                                </Card>
                                <Card className='col-md-6 p-4 rounded-4 Blogsidebar__blog-card border-0 my-3'>
                                    <Card className='rounded-4'>
                                        <Image src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" rounded />
                                    </Card>
                                    <div className="Blogsidebar__blog-discription row p-0  py-3">
                                        <Col md={2} className='rounded Blogsidebar__blog-logo p-0 ps-2'>
                                            <Image height={`30px`} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GHFzicMYaZPHv7YBikNwffrogSMVnTvLsQ&usqp=CAU' />
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
