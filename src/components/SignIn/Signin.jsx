//  Imports
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
// ++ -- ++

const Signin = ({ setIsAuth }) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth = true;
      window.location.pathname = "/";
    });
  };

  return (
    <>
      <Container>
        <Form>
          <h1>Sign in</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary">Sign In</Button>
        </Form>
        <div className="mt-3">
          <Button variant="primary" onClick={signInWithGoogle}>
            Sign In with Google here
          </Button>
        </div>
        <Link to="/sign_up">
          <p className="mt-3">Dont have a account yet? Sign Up here</p>
        </Link>
      </Container>
    </>
  );
};

export default Signin;
