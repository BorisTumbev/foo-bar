import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export class Error404 extends Component {
  backHome() {
    this.props.history.push(`/`);
  }

  render() {
    return <>Page Not Found</>;
  }
}

export default Error404;
