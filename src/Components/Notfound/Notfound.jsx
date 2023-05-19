import React from 'react';
import './Notfound.scss';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const Notfound = () => {

  let navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  }

  return (
    <section className='errorPage d-flex align-items-center'>
      <div className="container text-center">
        <h1 className='mb-4'>404 - Page Not Found</h1>
        <p>
          Whoops, it looks like the page you request wasn't found.
        </p>
        <button className='errorPage__btn my-4' onClick={backToHome}>
          BACK TO HOME
        </button>
      </div>
    </section>
  )
}

export default Notfound
