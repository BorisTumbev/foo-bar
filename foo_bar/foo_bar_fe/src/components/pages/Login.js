import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import MainLayout from "../blocks/layouts/MainLayout";

import { Form, FormControl, Button, Alert } from "react-bootstrap";

export class Login extends Component {
  state = {
    msg: "",
  };

  onLogin = (e) => {
    e.preventDefault();
    let form = e.target;
    login(form.elements.username.value, form.elements.pass.value).then(
      (msg) => {
        this.setState({ msg: msg });
      }
    );
  };

  returnMsg() {
    return (
      <Alert key="0" variant="danger">
        {this.state.msg}
      </Alert>
    );
  }

  render() {
    if (localStorage.getItem("token") != undefined) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <MainLayout {...this.props}>
          {this.state.msg != "" && this.returnMsg()}
          <Form onSubmit={this.onLogin} className="login-form">
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control required placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="pass">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </MainLayout>
      </>
    );
  }
}

export default Login;
