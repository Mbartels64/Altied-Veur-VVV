import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Forum from "./Pages/Forum";
import ErrorPage from "./Pages/ErrorPage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Socials from "./Pages/Socials";
import NavbarBS from "./components/header/Navbar";

function App() {
  return (
    <Router>
      <NavbarBS />
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
