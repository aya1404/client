import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
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

export default Footer