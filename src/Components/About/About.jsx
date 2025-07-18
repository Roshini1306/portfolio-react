import React from 'react'
import './About.css'
import profile_img from '../../assets/IMG_9282.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} className='about-profile-img' alt='' />
            </div>
            <div className="about-right">
                <div className="about-right-para">
                    <p>
                        I'm a Senior Software Engineer with 3+ years of experience specializing in blockchain systems (Corda, Cosmos), cloud automation (Ansible, Kubernetes, Azure), and full-stack development (React, JavaScript). Currently, I'm architecting GitHub Actions workflows to streamline CI/CD pipelines and advancing UI test automation with Playwright to ensure robust front-end solutions.
                    </p>
                    <p>
                        My key achievements include developing a Cosmos-based payment PoC, optimizing verifiable logs using Trillian (Go) with tile-based storage, and automating blockchain node deployments.
                    </p>
                </div>
                <div className="about-skills">
                    <h2>Technical Skills</h2>
                    <p>Languages: C++, Go, Python</p>
                    <p>Web Dev Tools: React, HTML, CSS, JavaScript</p>
                    <p> Relevent Coursework: Data Structures & Algorithms,Operating Systems, Object-Oriented Programming, Database
                        Management Systems, Blockchain Technology, 
                        Large Language Models (LLMs), OpenAI APIs.</p>
                    <p>Soft Skills: Problem Solving, Self-learning, Presentation, Adaptability</p>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className='about-achivement-item'>
                <h1>3+</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div className='about-achivement-item'>
                <h1>50+</h1>
                <p>DSA Problems solved</p>
            </div>
        </div>
    </div> 
  )
}

export default About