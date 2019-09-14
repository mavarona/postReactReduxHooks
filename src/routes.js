import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/createpost" component={CreatePost} />
    <Route exact path="/post/:id" component={Post} />
  </Switch>
);

export default Routes;
