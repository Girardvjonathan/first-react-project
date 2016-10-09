import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./app/Layout";
import Settings from "./user/Settings";
import MeteoIp from "./user/MeteoIp";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MeteoIp}></IndexRoute>
      {/* <Route path="archives(/:article)" name="archives" component={Archives}></Route> */}
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
