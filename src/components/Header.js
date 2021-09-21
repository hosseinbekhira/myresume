import React, { useContext } from "react";
import ImageBox from "./ImageBox";
import Navbar from "./Navbar";
import { contactContext } from "../pages/Home";
import "./header.scss";

function Header() {
  const contact = useContext(contactContext);
  const {
    location,
    phone,
    website,
    email,
    srcFacebook,
    srcYoutube,
    srcGithub,
    srcBehance,
    srcResume,
  } = contact;
  return (
    <header>
      <Navbar />
      <div className="img-profile-part">
        <ImageBox />
      </div>
      <div className="info-profile-part">
        <h1 className="title">
          Bekhira
          <span>ELHOSSEIN</span>
        </h1>
        <h3>Front-end Developer & Graphic Designer</h3>
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
          <li>
            <a href={srcResume} target="_blank" rel="noreferrer" download>
              Download CV
            </a>
          </li>
        </ul>
        <hr />
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
      </div>
    </header>
  );
}

export default Header;
