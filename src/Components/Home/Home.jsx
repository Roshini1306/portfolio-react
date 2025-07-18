import React from 'react'
import profile_img from '../../assets/IMG_9282.jpg'
import './Home.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/Roshini_B_Resume.pdf';

const Home = () => {
  return (
    <div id='home' className='home'>
        <img src={profile_img} className='profile-img' />
        <h1>I'm Roshini Kamala Priya, Senior Software Engineer </h1>
        <p>Software Engineer with 3+ years of experience in blockchain development, 
        specializing in secure systems, infrastructure automation, 
        and scalable front-end design. </p>
        <div className='home-actions'>
            <div className='home-resume'>
              <a
                href={resume}
                download="Roshini_Kamala_Priya_Resume.pdf"
                style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block' }}
                target="_blank"
                rel="noopener noreferrer"
              >Download Resume </a></div>
            <div className='home-connect'><AnchorLink className = 'anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        </div>
    </div>
  )
}

export default Home