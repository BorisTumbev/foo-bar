import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import MainLayout from "../blocks/layouts/MainLayout";

export class Home extends Component {
  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }

    return (
      <>
        <MainLayout {...this.props}>
          <div className="home">This is Home Page</div>
        </MainLayout>
      </>
    );
  }
}

export default Home;
