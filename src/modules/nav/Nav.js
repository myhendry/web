import React, { Component } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

// if using history from action creator to navigate, need to use Router instead of BrowserRouter
import history from "./history";
import NavBar from "../../common/NavBar";
import Home from "../../Home";
import Signup from "../auth/SignupForm";
import Login from "../auth/LoginForm";
import List from "../pagination/List";
import Detail from "../pagination/Detail";
import RForm from "../reduxForm/RForm";
import FForm from "../formik/FForm";

class Nav extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Container className="main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/list" component={List} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/rform/:id" component={RForm} />
                <Route path="/rform/" component={RForm} />
                <Route path="/fform/:id" component={FForm} />
                <Route path="/fform/" component={FForm} />
              </Switch>
            </Container>
          </div>
        </Router>
      </div>
    );
  }
}

export default Nav;
