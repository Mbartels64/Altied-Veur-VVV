import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <body>
      <nav className="navigation">
        <img
          src="https://i0.wp.com/altiedveurvvv.com/wp-content/uploads/2021/05/cropped-logo_large-1.png?fit=817%2C1500&ssl=1"
          alt=""
        />
        <a href="/" className="brand-name">
          Altied Veur VVV
        </a>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/forum">Forum</a>
            </li>
            <li>
              <a href="">Socials</a>
            </li>
            <li>
              <a href="">Log-in</a>
            </li>
            <li>
              <a href="">Sign-up</a>
            </li>
          </ul>
          <div
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <i className="fa-solid fa-bars fa-2xl"></i>
          </div>
        </div>
      </nav>
    </body>
  );
};

export default Navbar;
