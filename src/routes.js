import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Login from "./components/Login";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default Routes;
