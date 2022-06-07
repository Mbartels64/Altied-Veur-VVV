import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./components/header/Navbar.css";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Forum from "./Pages/Forum";
import ErrorPage from "./Pages/ErrorPage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Socials from "./Pages/Socials";

function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <Router>
      <nav className="navigation">
        <img
          src="https://i0.wp.com/altiedveurvvv.com/wp-content/uploads/2021/05/cropped-logo_large-1.png?fit=817%2C1500&ssl=1"
          alt=""
        />
        <Link to="/" className="brand-name">
          Altied Veur VVV
        </Link>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/forum">Forum</Link>
            </li>
            <li>
              <Link to="/socials">Socials</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Log In</Link>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/socials" element={<Socials />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
