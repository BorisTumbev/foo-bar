import React, { Component } from "react";
import ReactDOM from "react-dom";
import BaseRouter from "../routes";
import { HashRouter as Router, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../static/frontend/style.css';

class App extends Component {
  componentDidMount() {
    //        this.props.authCheckState();
  }

  render() {
    return (
      <>
        <Router>
          <BaseRouter />
        </Router>
      </>
    );
  }
}

//ReactDOM.render(<App />, document.getElementById('app'));
export default App;
