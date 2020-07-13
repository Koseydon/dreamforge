import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../View/Home";
import Blog from "../View/Blog";
import Post from "../View/Post";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/blog/:id" component={Post} />
    </Switch>
  );
};

export default Routes;
