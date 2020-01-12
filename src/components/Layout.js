import React, { Fragment } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
