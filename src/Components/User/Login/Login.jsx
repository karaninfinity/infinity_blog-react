import React, { useEffect, useState } from 'react'
import image from '../../Images/image.jpg';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import '../../css/Login.scss';
import axios from 'axios';
import Api_url from '../../../Request';
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [Data, setData] = useState([]);
    const [Username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const navigate = useNavigate();

    if (sessionStorage.user) {
        navigate('/admin')
    }

    useEffect(() => {
        axios.get(`${Api_url}/api/user`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        })
            .then(resp => {
                console.log(resp.data);
                setData(resp.data);
            })
    }, [])

    function Login() {

        sessionStorage.setItem('user', Username);
        if (Username === 'admin124' && Email === 'tanamy@gmail.com') {
            navigate('/admin');
        }
    }
    return (
        <div className='LoginPage d-flex align-item-center'>
            <Card className='w-50 m-auto shadow-lg border-0'>
                <Card.Img variant="top" src={image} />
                <Row>
                    <Col md={6}>
                        <div className="LoginPage__welcome">
                            <h1>WELCOME TO OUR COMMUNIITY</h1>
                            <p className='col-md-6 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque, rerum   </p>
                        </div>
                    </Col>
                </Row>
                <Card.Body className='text-center p-5'>
                    <h1 className='mb-5'>Login</h1>
                    <Card.Text>
                        <form action="">
                            <input value={Username} onChange={e => setUsername(e.target.value)} className='form-control mb-4' type="text" placeholder='Username' />
                            <input value={Email} onChange={e => setEmail(e.target.value)} className='form-control' type="email" placeholder='Email' />
                            <div className="LoginPage__verify d-flex my-4">
                                <div className="LoginPage__remember w-50">
                                    <h4 className='text-start'>Remember</h4>
                                </div>
                                <div className="LoginPage__forgot w-50">
                                    <h4 className='text-end'>Forgot Password ?</h4>
                                </div>
                            </div>
                            <div className="LoginPage__submit d-flex justify-content-center">
                                <Button className='LoginPage__btn' onClick={Login}>LOG IN</Button>
                            </div>
                        </form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
