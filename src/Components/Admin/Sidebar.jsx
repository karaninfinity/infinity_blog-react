import React from 'react';
import { Accordion, Button, Col, Row } from 'react-bootstrap';
import Logo from '../Images/logo.png'
import { AiOutlineDashboard, AiOutlineProject, AiOutlineRocket } from 'react-icons/ai';
import { MdPeopleOutline } from 'react-icons/md';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Sidebar = (props) => {

    const navigate = useNavigate();

    let Logout = () => {
        sessionStorage.clear();
        navigate('/login');
    }
    return (
        <>
            <div className="nav-header admin__logo py-4">
                <a href="">
                    <img src={Logo} alt="" />
                </a>
            </div>
            <nav className='admin__sidenav mt-4'>
                <ul className='admin__list'>
                    <div className='py-3'>
                        <li className='px-3'><Link className='text-decoration-none' to="/admin"> <AiOutlineDashboard /> Dashboard</Link></li>
                    </div>
                    <div className='py-3'>
                        <li className='px-3'><Link className="text-decoration-none" to='blogs'><MdPeopleOutline /> Blogs </Link></li>
                    </div>
                    <div className='py-3'>
                        <li className='px-3'><Link className="text-decoration-none" to=''><AiOutlineRocket />Leave</Link></li>
                    </div>
                    <div className='py-3'>
                        <li className='px-3'><Link className="text-decoration-none" to=''><AiOutlineProject />Project</Link></li>
                    </div>
                </ul>
                <Button variant='danger' onClick={Logout}>
                    Log out
                </Button>
            </nav>
        </>
    )
}

export default Sidebar;
