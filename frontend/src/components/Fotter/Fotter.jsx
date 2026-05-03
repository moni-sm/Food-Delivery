import React, { useState } from 'react'
import './Fotter.css'
import { assets } from '../../assets/assets'

const Fotter = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleWhatsAppClick = () => {
    setShowPopup(true)
    window.setTimeout(() => setShowPopup(false), 3000)
  }

  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae suscipit exercitationem sed dolorem cupiditate. Libero corporis minus quam, id dignissimos quis, sapiente hic at placeat tempore explicabo necessitatibus nam earum.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>
                      <a
                        href='https://wa.me/919880966185?text=Hi%20Tomato%20Team,%20I%20want%20to%20contact%20you'
                        target='_blank'
                        rel='noreferrer'
                        className='footer-contact-link'
                        onClick={handleWhatsAppClick}
                      >
                        WhatsApp: 9880966185
                      </a>
                    </li>
                    <li><a href='mailto:info@tomato.com' className='footer-contact-link'>info@tomato.com</a></li>
                </ul>
            </div>
        </div>
        {showPopup && (
          <div className='footer-popup'>
            WhatsApp chat opened. Message was sent successfully.
          </div>
        )}
        <hr />
        <p className='footer-copyright'>
            Copyright 2024  Tomato.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Fotter