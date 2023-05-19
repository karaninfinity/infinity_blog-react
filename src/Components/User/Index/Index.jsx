import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Index() {
  return (
    <>
        <Header />
        <Outlet/>
        <Footer />
    </>
  )
}
