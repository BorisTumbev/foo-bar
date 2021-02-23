import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Error404 from "./components/pages/404";
import Foo from "./components/pages/Foo";
import Bar from "./components/pages/Bar";

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/foo" component={Foo} />
      <Route exact path="/bar" component={Bar} />
      <Route component={Error404} />
    </Switch>
  </div>
);

export default BaseRouter;
