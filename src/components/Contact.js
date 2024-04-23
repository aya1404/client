import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div>
      <section className="persuader">
        <div className="contact">
          <div className='contact-content'>
            <h1>APPOINTMENT</h1>
            <p>Fill out the form and we'll call you back to discuss event details and packages.</p>
            <button>Book Now</button>
          </div>
          <div className='contact-content'>
            <h1>CONTACT</h1>
            <p>We strive to go above and beyond for our clients no matter the challenge. 
              We aim to deliver our very best work every single day across our services.
              If you need any information, please feel free to contact us.</p>
            <p>Our contact details :<br/>
                Tel : +216 56 226  093<br/>
                Email: brhstudio@gmail.com</p>
          </div>
        </div>
        <div className="form">
          <label for="name">Your Full Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required/>

          <label for="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label for="number">Your Phone Number</label>
          <input class="form-control" type="phone number" placeholder="Enter your phone number" required/>

          <label for="number">Services</label>
          <select class="form-control" required>
            <option value="" selected hidden>Choose a service</option>
            <option>Videography</option>
            <option>Portrait photoshoot</option>
            <option>Event photoshoot</option>
            <option>Photo editing, color correction</option>
          </select>

          <label for="number">Name of event</label>
          <input class="form-control" type="text" placeholder="birthday, wedding..." required/>

          <label for="date">Date</label>
          <input class="form-control" type="date" required/>

        </div>
      </section>
    </div>
  )
}

export default Contact