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
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  logout = (e) => {
    this.props.logout();
  };

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
            <Nav>
              {this.props.isAuthenticated && (
                <Nav.Link onClick={this.logout}>Logout</Nav.Link>
              )}
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
