import React from 'react'
import Navbar from './Navbar'

const Layout = () => {
  return (
    
    <div className="layout">
      <Navbar />
      <div className="content"></div>
      <footer>
        <p>Copyright 2023 Web Warrior</p>
      </footer>
    </div>
  )
}

export default Layout