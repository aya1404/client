import React from 'react';
import './services.css'
import event from '../images/hero-bg.jpeg'
import portrait from '../images/portrait3.jpeg'
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <section class="services">
        <div class="services__items">
          <h2>Our services</h2>
          <div class="services__item">
            <div class="services__item__photo"><img src={portrait} alt='Portrait photography'/></div>
            <div class="services__item__info">
              <div class="inner">
                <h5>Portrait photography</h5>
                <p>Portrait photography, or portraiture, is a type of photography 
                  aimed toward capturing the personality of a person 
                  or group of people by using effective lighting, backdrops, and poses.
                  A portrait photograph may be artistic or clinical.<br/>
                  <br/>
                <b> Location, lighting, composition, emotion and technical settings.</b> When all 5 of these elements are well executed, a great portrait is created.</p>
                <h3>From 150DT</h3>
              </div>
              <Link to='/contact'><button class="services__item__cta">Book Now </button></Link>
            </div>
          </div>
          <div class="services__item">
            <div class="services__item__info">
              <div class="inner">
                <h5>Event photography</h5>
                <p>Event photography is the practice of photographing guests and occurrences at any Event or occasion where one may hire a photographer for. This is a coverage that is used around the world at occasions such as weddings, parties, trips, birthdays, meals and engagements.</p>
                <h3>From  250DT</h3>
              </div>
              <Link to='/contact'><button class="services__item__cta">Book Now </button></Link>
            </div>
            <div class="services__item__photo"><img src={event} alt='Event photography'/></div>
          </div>
          <div class="services__item">
            <div class="services__item__photo"><img src='https://images.pexels.com/photos/4170565/pexels-photo-4170565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Videography'/></div>
            <div class="services__item__info">
              <div class="inner">
                <h5>Videography</h5>
                <p>Videograph  or videography, is a type of videoshoot aimed toward capturing the personality of a person or group of people by using effective lighting, backdrops, and poses. A portrait & landscape  videograph may be artistic or clinical.</p>
                <h3>From 50DT</h3>
              </div>
              <Link to='/contact'><button class="services__item__cta">Book Now </button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services