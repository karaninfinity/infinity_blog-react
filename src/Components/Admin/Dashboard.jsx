import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import '../css/Admin/Dashboard.scss'
import { AiOutlineFile, AiOutlineUser, AiOutlineCalendar } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs'

const Dashboard = () => {
  return (
      <section className='Dashboard p-3'>
          <Row>
              <Col md={3}>
                  <Card className='Dashboard__card border-0'>
                      <div className='Dashboard__card-body rounded card-body p-4 d-flex'>
                          <div className='Dashboard__employee-logo w-25 rounded-circle'>
                            <AiOutlineUser/>
                          </div>
                          <div className='w-75 px-4 Dashboard__details'>
                              <h3>4 Employee</h3>
                          </div>      
                      </div>   
                  </Card>
              </Col>
              <Col md={3}>
                  <Card className='Dashboard__card border-0'>
                      <div className='Dashboard__card-body rounded card-body p-4 d-flex'>
                          <div className='Dashboard__leave-logo w-25 rounded-circle'>
                          <AiOutlineFile/>
                          </div>
                          <div className='w-75 px-4 Dashboard__details'>
                              <h3>0 leaves</h3>
                          </div>      
                      </div>   
                  </Card>
              </Col>
              <Col md={3}>
                  <Card className='Dashboard__card border-0'>
                      <div className='Dashboard__card-body rounded card-body p-4 d-flex'>
                          <div className='Dashboard__project-logo w-25 rounded-circle'>
                            <AiOutlineCalendar/>
                          </div>
                          <div className='w-75 px-4 Dashboard__details'>
                              <h3>2 Projects</h3>
                          </div>      
                      </div>   
                  </Card>
              </Col>
              <Col md={3}>
                  <Card className='Dashboard__card border-0'>
                      <div className='Dashboard__card-body rounded card-body p-4 d-flex'>
                          <div className='Dashboard__loan-logo w-25 rounded-circle'>
                            <BsCurrencyDollar/>
                          </div>
                          <div className='w-75 px-4 Dashboard__details'>
                              <h3>0 loan</h3>
                          </div>      
                      </div>   
                  </Card>
              </Col>
          </Row>
          <Row className='mt-5'>
              <Col md={3}>
                  <Card className='Dashboard__card border-0'>
                        <div className='Dashboard__employee rounded Dashboard__card-body card-body p-4 d-flex'>
                            <div className=''>
                                <h1>0</h1>
                                <h6>Former Employees</h6>
                            </div>       
                        </div>  
                  </Card>
              </Col>
              <Col md={3}>
                  <Card className='Dashboard__card border-0'>
                      <div className='Dashboard__card-body Dashboard__leave rounded card-body p-4 d-flex'>
                            <div className=''>
                                <h1>0</h1>
                                <h6>Former Employees</h6>
                            </div>       
                      </div>   
                  </Card>
              </Col>
              <Col md={3}>
                  <Card className='Dashboard__card border-0'>
                        <div className='Dashboard__card-body Dashboard__project rounded card-body p-4 d-flex'>
                            <div className=''>
                                <h1>0</h1>
                                <h6>Former Employees</h6>
                            </div>       
                        </div>   
                  </Card>
              </Col>
              <Col md={3}>
                  <Card className='Dashboard__card border-0'>
                        <div className='Dashboard__card-body Dashboard__loan rounded card-body p-4 d-flex'>
                            <div className=''>
                                <h1 className='text-light text-center'>0</h1>
                                <h6>Former Employees</h6>
                            </div>       
                        </div>   
                  </Card>
              </Col>
          </Row>
      </section>
  )
}

export default Dashboard
