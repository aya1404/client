import React from 'react';
import './layout.css'
import logo from '../images/STUDIO.png'

const Layout = () => {
  return (
    <div>
      {/*  Navbar Section */}
        <nav className="nav">
            <div className="nav__logo"><a href="/"><img src={logo} alt='BRh Studio' /></a></div>
            <div className="nav__links">
            <div className="nav__item"><a href="/">Home</a></div>
            <div className="nav__item"><a href="/services">our services</a></div>
            <div className="nav__item"><a href="/contact">Contact us</a></div>
            </div>
        </nav>
        
        
    </div>
  )
}

export default Layout