import React from 'react'
import './Navbar.css'
import logo from '../../assets/new_logo.png' // Adjust the path as necessary
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

  const[menu, setMenu] = React.useState("home");
  
  return (
    <div className='navbar'>
        <img src={logo} alt='' style={{width: '200px' }}/>
        <ul className='nav-menu'>
            <li  className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}><AnchorLink className = 'anchor-link' href='#home'><p>Home</p></AnchorLink></li>
            <li className={menu === "about" ? "active" : ""} onClick={() => setMenu("about")}><AnchorLink className = 'anchor-link' offset={50} href='#about'><p>About</p></AnchorLink></li>
            <li className={menu === "experience" ? "active" : ""} onClick={() => setMenu("experience")}><AnchorLink className = 'anchor-link' offset={50} href='#experience'><p>Experience</p></AnchorLink></li>
            <li className={menu === "projects" ? "active" : ""} onClick={() => setMenu("projects")}><AnchorLink className = 'anchor-link' offset={50} href='#projects'><p>Projects</p></AnchorLink></li>
            <li className={menu === "contact" ? "active" : ""} onClick={() => setMenu("contact")}><AnchorLink className = 'anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
        </ul>
        <div className='nav-connect'><AnchorLink className = 'anchor-link' href='#contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar