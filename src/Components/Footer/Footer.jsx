import React from 'react'
import './Footer.css'
import logo from '../../assets/new_logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt='' style={{width: '200px' }}/>
                <p>Software Engineer with 3+ years of experience in blockchain development,
                    specializing in secure systems, infrastructure automation,
                    and scalable front-end design.</p>
            </div>
        </div>
  
        <hr/>
        <div className='footer-bottom'>
            <div className='footer-bottom-left'>
                <p>© 2025 Roshini Kamala Priya B. All rights reserved.</p>
            </div>
            <div className='footer-bottom-right'>
                <p>Designed and Developed by Roshini Kamala Priya</p>
            </div>
        </div>
    </div>
  )
}

export default Footer