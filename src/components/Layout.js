import React from 'react';
import './layout.css'
import logo from '../images/STUDIO.png'
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import Services from './Services';

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
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        {/*  Footer Section */}
        <footer className="footer">
            <div className="footer-content">
                <ul class="social" id="demo1">
                    <li><a href="https://www.facebook.com/?locale=fr_FR" target="_blank" className="fa fa-facebook"></a>BRh Studio</li>
                    <li><a href="#" className="fa fa-instagram"></a>BRh Studio</li>
                    <li><a href="#" className="fa fa-envelope"></a>brhtudio@gmail.com</li>
                </ul>
                <p>&copy; 2024 BRh Studio. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Layout