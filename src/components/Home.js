import React from 'react'
import './home.css'
import event from '../images/eventcamp.jpeg'
import portrait from '../images/portrait3.jpeg'
import profil from '../images/profil.jpeg'
import img1_1 from '../images/monstir.jpeg'
import img1_2 from '../images/campByNight.jpeg'
import img1_3 from '../images/nature.jpeg'
import img1_4 from '../images/moon.jpeg'
import img2_1 from '../images/benzaret.jpeg'
import img2_2 from '../images/riadh.jpeg'
import img2_3 from '../images/zaghoun.jpeg'
import img2_4 from '../images/calm.jpeg'
import img3_1 from '../images/ocean.jpeg'
import img3_2 from '../images/lune.jpeg'
import img3_3 from '../images/tozeur.jpeg'
import img3_4 from '../images/cat.jpeg'
import img4_1 from '../images/sousse.jpeg'
import img4_2 from '../images/metline.jpeg'
import img4_3 from '../images/mosquee.jpeg'
import img4_4 from '../images/monstir.jpeg'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        {/*  hero Section */}
        <section className="hero">
            <h2>Make All Your Events</h2>
            <h1>memorable.</h1>
            <p>The best way to preserve your memories.</p>
            <Link to='/services'><button>Book Now</button></Link>
        </section>

        {/*  services Section */}
        <section className='services'>
          <h1>Our Services</h1>
          <div className='cards'>
            <div className='card'>
              <img src={portrait} alt='Portrait photography'/>
              <h2>Portrait photography</h2>
              <p>Get amazing portraits in matter of minutes. Book 2 days prior.</p>
              <Link to='/contact'><button>Book Now</button></Link>
            </div>

            <div className='card'>
              <img src={event} alt='Event photography'/>
              <h2>Event photography</h2>
              <p>Capture your events in the most amazing way. Book before a week.</p>
              <Link to='/contact'><button>Book Now</button></Link>
            </div>

            <div className='card'>
              <img src='https://images.pexels.com/photos/4170565/pexels-photo-4170565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Videography'/>
              <h2>Videography</h2>
              <p>Your life and events as cinema. Top notch filmmaking for your budget.</p>
              <Link to='/contact'><button>Book Now</button></Link>
            </div>
          </div>
        </section>

        {/*  portfolio Section */}
        <section className='portfolio'>
          <h1>Portfolio</h1>
          <div className='portfolio-content'>
            <div className="gallery">
              <div className="gallery__strip__wrapper">
                <div className="gallery__strip one">
                  <div className="photo">
                    <div className="photo__image"><img src={img1_1} alt='image1'/></div>
                  </div>
                  <div className="photo">
                    <div className="photo__image"><img src={img1_2} alt='image2'/></div>
                  </div>
                  <div className="photo">
                    <div className="photo__image"><img src={img1_3} alt='image3'/></div>
                  </div>
                  <div className="photo">
                    <div className="photo__image"><img src={img1_4} alt='image4'/></div>
                  </div>
                </div>
              </div>
              <div className="gallery__strip__wrapper">
                <div className="gallery__strip two">
                  <div className="photo">
                    <div className="photo__image"><img src={img2_1} alt='image1'/></div>
                  </div>
                  <div className="photo">
                    <div className="photo__image"><img src={img2_2} alt='image2'/></div>
                  </div>
                  <div class="photo">
                    <div class="photo__image"><img src={img2_3} alt='image3'/></div>
                  </div>
                  <div className="photo">
                    <div className="photo__image"><img src={img2_4} alt='image4'/></div>
                  </div>
                </div>
              </div>
              <div className="gallery__strip__wrapper">
                <div className="gallery__strip three">
                  <div className="photo">
                    <div className="photo__image"><img src={img3_1} alt='image1'/></div>
                  </div>
                  <div className="photo">
                    <div className="photo__image"><img src={img3_2} alt='image2'/></div>
                  </div>
                  <div className="photo">
                    <div class="photo__image"><img src={img3_3} alt='image3'/></div>
                  </div>
                  <div className="photo">
                    <div className="photo__image"><img src={img3_4} alt='image4'/></div>
                  </div>
                </div>
              </div>
              <div className="gallery__strip__wrapper">
                <div className="gallery__strip four">
                  <div className="photo">
                    <div className="photo__image"><img src={img4_1}alt='image1'/></div>
                  </div>
                  <div className="photo">
                    <div className="photo__image"><img src={img4_2} alt='image2'/></div>
                  </div>
                  <div className="photo">
                    <div className="photo__image"><img src={img4_3} alt='image3'/></div>
                  </div>
                  <div className="photo">
                    <div className="photo__image"><img src={img4_4} alt='image4'/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  about Section */}
        <section className='about'>
          <h1>A highly <span>collaborative and supportive</span> individual, coming together on every project to ensure our clients get the best result.</h1>
          <img src={profil} alt='Adem BRh'/>
          <h2>Adem Ben rhouma</h2>
          <p>A professional multi-disciplinary photographer and videographer.</p>
        </section>

    </div>
  )
}

export default Home