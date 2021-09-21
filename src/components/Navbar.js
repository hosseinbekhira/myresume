import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const [button, setButton] = useState(false);

  const closeMenu = () => {
    if (window.innerWidth < 992) {
      setButton(false);
      document.body.classList.toggle("stop-scrolling");
    }
  };

  const handleClick = () => {
    setButton(!button);
    document.body.classList.toggle("stop-scrolling");
  };

  return (
    <nav className="navbar-container">
      <ul className={button ? "list-items active" : "list-items"}>
        <li className="item">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="item">
          <Link to="/resume" onClick={closeMenu}>
            Resume
          </Link>
        </li>
        <li className="item">
          <Link to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>
        </li>
        <li className="item">
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
      <div
        className={button ? "icon-nav active" : "icon-nav"}
        onClick={handleClick}
      >
        {button ? (
          <i className="far fa-window-close"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
