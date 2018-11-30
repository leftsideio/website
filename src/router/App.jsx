import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";

import Home from "../components/Home";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default hot(module)(AppRouter);
