import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  // Menu data
  const menuData = [
    {
      title: "Home",
      onClick: closeMobileMenu,
    },
    {
      title: "Services",
      onClick: closeMobileMenu,
    },
    {
      title: "About",
      onClick: closeMobileMenu,
    },
    {
      title: "Sign up",
      onClick: closeMobileMenu,
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          PNKSPP <i className="fab fa-accusoft"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-typo3" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}></ul>
        {menuData.map((item) => (
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={item.onClick}>
              {item.title}
            </Link>
          </li>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
