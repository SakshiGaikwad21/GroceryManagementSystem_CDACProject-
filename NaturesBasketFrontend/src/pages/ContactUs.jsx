import React from 'react';
import './ContactUs.css';
import logo from "../images/e_logo.jpg";

function ContactUs() {
  return (
    <section className="contact-us">
      <div className="contact-info">
        <h2>Contact Us</h2><br />
        <h5>Have any questions or comments? We'd love to hear from you!</h5><br />
        <h5><b>Phone: </b><a href="tel:+919044127435">+917020952064</a></h5>
        <h5><b>Email: </b><a href="mailto:martfarmers@gmail.com">reachus@naturebasket.com</a></h5><br />
        <h5><b>Address: </b> CDAC-ACTS, Panchvati Pashan,Pune  Maharashtra 410018</h5>
      </div>
      <div className="contact-image">
        <img src={logo} alt="Contact Us" />
      </div>

      
    </section>
    
          
       
  );
}

export default ContactUs;
