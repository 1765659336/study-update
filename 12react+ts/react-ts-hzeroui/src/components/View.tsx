import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Index from "../pages/login/Index";

class View extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <Redirect to="/login"></Redirect>
        </Route>
        <Route path="/login">
          <Index></Index>
        </Route>
      </Router>
    );
  }
}

export default View;
