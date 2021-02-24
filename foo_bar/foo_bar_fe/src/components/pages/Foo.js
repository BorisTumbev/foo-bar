import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import MainLayout from "../blocks/layouts/MainLayout";

import { CardDeck, Card } from "react-bootstrap";

export class Foo extends Component {

  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }

    return (
      <>
        <MainLayout {...this.props}>
          <div className="main">
            <p>Foo</p>
          </div>
        </MainLayout>
      </>
    );
  }
}

export default Foo;
