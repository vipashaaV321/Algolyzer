
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.4.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";
import HomePage from "layouts/HomePage.js";

// const hist = createBrowserHistory();
// history={hist}
ReactDOM.render(
  <React.StrictMode>
  <Router >
    <Switch>
    <Route path="/home" render={(props) => <HomePage {...props} />} />
      
      <Route path="/Algolyzer" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/home" />
    </Switch>
  </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
