import React, { useEffect, useState } from 'react';
import Api_url from '../../../Request';
import axios from 'axios';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Bloglist.scss';

let Blogs = {
    Title: 'Lorem ipsum dolor sit.',
    Comments: '2 comments',
    Category: 'Photography',
};

const Bloglist = () => {
    const [Blog, setBlog] = useState([]);

    useEffect(() => {
        axios
            .get(`${Api_url}/blog`, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                },
            })
            .then((result) => {
                console.log(result.data);
                setBlog(result.data);
            });
    }, []);
    return (
        <>
            <section className="hero-section hero">
                <Container>
                    <Row className="hero__row">
                        <Col lg={7} md={12}>
                            <div className="hero__content">
                                <h2 className="hero__title">
                                    Skyfinity Quick Checkout Plugin
                                </h2>
                                <p className="hero__desc">
                                    Explore opportunities from across the globe
                                    to learn, showcase skills, gain CV points, &
                                    get hired by your dream company.
                                </p>
                                <a
                                    href="/"
                                    className="default-btn read-more-btn "
                                >
                                    Click Here To Buy Now
                                </a>
                            </div>
                        </Col>
                        <Col lg={5} md={12}>
                            <div className="hero__content-image">
                                <img
                                    src={
                                        'http://localhost:8080/images/learn-bg-desktop-image.jpg'
                                    }
                                    alt=""
                                    className="Bloglist__blogImage"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container>
                <Row className="Bloglist ">
                    <Col md={9} className="Bloglist__wrapper">
                        {Blog.map((item) => (
                            <div
                                key={item.bId}
                                className="Bloglist__blogs col-md-5"
                            >
                                <img
                                    src={
                                        'http://localhost:8080/images/learn-bg-desktop-image.jpg'
                                    }
                                    alt=""
                                    className="Bloglist__blogImage"
                                />
                                <div className="Bloglist__category">
                                    <p className="default-badge">
                                        {item.vCategoryName}
                                    </p>
                                </div>
                                <div className="Bloglist__content blog-card">
                                    <h5 className="Bloglist__title">
                                        {item.vBlogTitle}
                                    </h5>
                                    <span className="txt-author">
                                        By Infinity Softech
                                    </span>
                                    {/* <span className="Bloglist__comments ms-3">
                                        {Blogs.Comments}
                                    </span> */}
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quasi obcaecati
                                        deserunt odio alias porro quod.
                                    </p>
                                    <div className="Bloglist__articles">
                                        <a
                                            href="/"
                                            className="default-btn read-more-btn "
                                        >
                                            Read Article
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Col>
                    <Col md={3} className="Blogsidebar">
                        <div className="Blogsidebar__widget">
                            <h4 className="">Our Products</h4>
                        </div>
                        <div className="Blogsidebar__cardwrapper">
                            <div className="Blogsidebar__blog-card">
                                <div className="Blogsidebar__blog-images">
                                    <Image src="http://localhost:8080/images/mentorships-bg-new.jpg" />
                                </div>
                                <div className="Blogsidebar__blog-discription">
                                    <div className="">
                                        <h5>Skyfinity Quick Checkout Plugin</h5>
                                    </div>
                                    <p className="Blogsidebar__desc">
                                        The OpenAI search bar plugin provides
                                        access to a feature that allows you to
                                        add a powerful AI search bar to your
                                        website using a shortcode.
                                    </p>
                                    <div className="Blogsidebar__spacing-btn">
                                        <a
                                            href="/"
                                            className="default-btn download-btn"
                                        >
                                            Download
                                        </a>
                                        <a
                                            href="/"
                                            className="default-btn documentation-btn"
                                        >
                                            Documentation
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="Blogsidebar__blog-card">
                                <div className="Blogsidebar__blog-images">
                                    <Image src="http://localhost:8080/images/practice-bg-image.jpg" />
                                </div>
                                <div className="Blogsidebar__blog-discription">
                                    <div className="">
                                        <h5>Gold Price Plugin</h5>
                                    </div>
                                    <p className="Blogsidebar__desc">
                                        Establish a global price per gram of
                                        precious metals for efficient and
                                        accurate pricing. Automate pricing
                                        calculations using weight for faster and
                                        accurate results. Achieve efficient
                                        pricing for Woo-Commerce products
                                        through weight-based automated pricing.
                                    </p>
                                    <div className="Blogsidebar__spacing-btn">
                                        <a
                                            href="/"
                                            className="default-btn download-btn"
                                        >
                                            Download
                                        </a>
                                        <a
                                            href="/"
                                            className="default-btn documentation-btn"
                                        >
                                            Documentation
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="Blogsidebar__blog-card">
                                <div className="Blogsidebar__blog-images">
                                    <Image src="http://localhost:8080/images/mentorships-bg-new.jpg" />
                                </div>
                                <div className="Blogsidebar__blog-discription">
                                    <div className="">
                                        <h5>AI Search Bar Plugin</h5>
                                    </div>
                                    <p className="Blogsidebar__desc">
                                        The OpenAI search bar plugin provides
                                        access to a feature that allows you to
                                        add a powerful AI search bar to your
                                        website using a shortcode.
                                    </p>
                                    <div className="Blogsidebar__spacing-btn">
                                        <a
                                            href="/"
                                            className="default-btn download-btn"
                                        >
                                            Download
                                        </a>
                                        <a
                                            href="/"
                                            className="default-btn documentation-btn"
                                        >
                                            Documentation
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Bloglist;
