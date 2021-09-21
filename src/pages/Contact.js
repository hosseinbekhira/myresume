import React from "react";
import Navbar from "../components/Navbar";
import TopScroll from "../components/TopScroll";
import "./contact.scss";

const contact = {
  location: "Algeria, Saida",
  phone: "+213555275713",
  website: "www.hosseinbekhira.com",
  email: "bekhiraelhossein@gmail.com",
  srcFacebook: "https://www.facebook.com/",
  srcYoutube: "https://www.youtube.com/",
  srcGithub: "https://github.com/hosseinbekhira",
  srcBehance: "https://www.behance.net/bekhiraelhoss",
};

const {
  location,
  phone,
  website,
  email,
  srcFacebook,
  srcYoutube,
  srcGithub,
  srcBehance,
} = contact;

function Contact() {
  return (
    <>
      <Navbar />

      <div
        className="container-contact"
        style={{ backgroundImage: `url("/images/world.jpg")` }}
      >
        <div className="part-info-contact">
          <h2>Contact Us</h2>

          <div className="info-contact">
            <div className="part">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="text-info">
                <h4>Location</h4>
                <p>{location}</p>
              </div>
            </div>
            <div className="part">
              <div className="icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="text-info">
                <h4>Phone</h4>
                <p>{phone}</p>
              </div>
            </div>
            <div className="part">
              <div className="icon">
                <i className="fas fa-globe-europe"></i>
              </div>
              <div className="text-info">
                <h4>Website</h4>
                <p>{website}</p>
              </div>
            </div>
            <div className="part">
              <div className="icon">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div className="text-info">
                <h4>Email</h4>
                <p>{email}</p>
              </div>
            </div>
          </div>

          <ul className="social-media">
            <li>
              <a href={srcFacebook} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href={srcYoutube} target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href={srcGithub} target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href={srcBehance} target="_blank" rel="noreferrer">
                <i className="fab fa-behance"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="part-form-contact">
          <h2>Drop me a line</h2>
          <form className="form-contact">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Your Company" />
            <textarea placeholder="Your Message" />
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
      <TopScroll />
    </>
  );
}

export default Contact;
