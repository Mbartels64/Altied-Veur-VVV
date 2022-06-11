import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Forum from "./Pages/Forum";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import Socials from "./Pages/Socials";
import Register from "./Pages/Register";
import CreatePost from "./Pages/CreatePost";
import { Button } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/signin";
    });
  };

  return (
    <Router>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i0.wp.com/altiedveurvvv.com/wp-content/uploads/2021/05/cropped-logo_large-1.png?fit=817%2C1500&ssl=1"
              height="40"
              className="d-inline-block align-center"
            />
            Altied Veur VVV
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/forum">Forum</Nav.Link>
              <Nav.Link href="/socials">Socials</Nav.Link>
              {!isAuth ? (
                <Nav.Link href="/signin">Log In</Nav.Link>
              ) : (
                <>
                  <Nav.Link href="/createpost">Create Post</Nav.Link>
                  <Button onClick={signUserOut}>Log Out</Button>
                </>
              )}
              {!isAuth ? <Nav.Link href="/sign_up">Sign Up</Nav.Link> : <></>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/news" element={<News isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/forum" element={<Forum isAuth={isAuth} />} />
        <Route path="/signin" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/sign_up" element={<Register setIsAuth={setIsAuth} />} />
        <Route path="/socials" element={<Socials isAuth={isAuth} />} />
        <Route path="/*" element={<ErrorPage isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
