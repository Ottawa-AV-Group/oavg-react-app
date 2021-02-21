import React from "react";
import { Route, Switch } from "react-router";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

export default function routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
}
