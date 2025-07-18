import React from 'react'
import './Contact.css'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import LocationPinIcon from '@mui/icons-material/LocationPin';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1cefe21d-9a36-4b8e-953e-e3e53088ae28");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            alert("Thank you for reaching out! I will get back to you soon.");
        } else {
        console.log("Error", data);
            setResult(data.message);

        }
    };

  return (
    <div id= 'contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>If you have any questions, any job openings, want to collaborate on a project, or just want to say hi, feel free to reach out!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <EmailIcon className='contact-icon' />
                        <p>roshinikamalapriya6@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <CallIcon className='contact-icon' />
                        <p>+91 9876543210</p>  
                    </div>
                    <div className="contact-detail">
                        <LinkedInIcon className='contact-icon' />
                        <a
                            href="https://www.linkedin.com/in/roshini-13"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'inherit', textDecoration: 'underline' }}
                        >
                            www.linkedin.com/in/roshini-13
                        </a>
                    </div>
                    <div className="contact-detail">
                        <LocationPinIcon className='contact-icon' />
                        <p>Bengaluru, Karnataka</p>
                    </div>
                </div>
            </div>
            <form onSubmit= {onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" placeholder="Enter your Name"></input>
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" placeholder="Enter your Email"></input>
                <label htmlFor="">Your Message</label>
                <textarea name="message" placeholder="Enter your Message" rows={8}></textarea>
                <button type="submit" className='contact-submit'>Sumbit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact