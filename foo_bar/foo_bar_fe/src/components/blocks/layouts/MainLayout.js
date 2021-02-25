import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { logout } from "../../../actions/auth";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export class MainLayout extends Component {

  render() {
    return (
      <>
        <Navbar bg="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#foo">Foo</Nav.Link>
              <Nav.Link href="#bar">Bar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
        <div className="footer fixed-bottom"></div>
      </>
    );
  }
}

export default MainLayout;
