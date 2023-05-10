import React from 'react'
import PublicLayout from '../Layouts/PublicLayout'
import ProtectedLayout from '../Layouts/ProtectedLayout'
import Index from '../Components/Index'
import Login from '../Components/Login'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Services from '../Components/Services'
import Products from '../Components/Products'
import Adminpanel from '../Components/Admin/Adminpanel'
import Blogs from '../Components/Admin/Blogs'
import Dashboard from '../Components/Admin/Dashboard'
import Bloglist from '../Components/Bloglist'

export default function AllRoutes() {
  return (
    <Router>
        <Routes>
        <Route path='/' element={<PublicLayout> <Index /></PublicLayout>}>
          <Route index element={ <PublicLayout><Bloglist/></PublicLayout> } />
          <Route path='services' element={<PublicLayout> <Services /> </PublicLayout>} />
          <Route path='products' element={<PublicLayout> <Products /> </PublicLayout>} />
        </Route>
        <Route path='/login' element={<PublicLayout><Login /></PublicLayout>} />
        <Route path='admin'>
          <Route index element={ <ProtectedLayout><Adminpanel><Dashboard/></Adminpanel></ProtectedLayout> } />
          <Route path='blogs' element = { <Adminpanel><Blogs/></Adminpanel> } />
        </Route>
        </Routes>
    </Router>
  )
}
