import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import MainLayout from "../blocks/layouts/MainLayout";
import { getBars } from "../../actions/bar";
import { CardDeck, Card, ListGroup, Form } from "react-bootstrap";

export class Bar extends Component {
  state = {
    bars_list: [],
  };
  componentDidMount() {
    getBars().then((bars) => {
      if (bars != undefined) {
        this.setState({ bars_list: bars });
      }
    });
  }

  renderBars() {
    return this.state.bars_list.map(function (bar, index) {
      return (
        <ListGroup.Item key={index}>
          rating {bar.rating} Bar {bar.name}
        </ListGroup.Item>
      );
    });
  }

  onSelectChange = (value) => {
    getBars(value.target.value).then((bars) => {
      this.setState({ bars_list: bars });
    });
  };

  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }

    return (
      <>
        <MainLayout {...this.props}>
          <div className="bar-main">
            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Select Rating value</Form.Label>
                <Form.Control as="select" custom onChange={this.onSelectChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form>
            <ListGroup>{this.renderBars()}</ListGroup>
          </div>
        </MainLayout>
      </>
    );
  }
}

export default Bar;
