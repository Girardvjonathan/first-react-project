import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout"
import store from "./store"
import About from "./components/About";
import MeteoIp from "./components/MeteoIP";

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  <div>
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MeteoIp}></IndexRoute>
      {/* <Route path="archives(/:article)" name="archives" component={Archives}></Route> */}
      <Route path="settings" name="settings" component={About}></Route>
    </Route>
  </Router>
  </div>
</Provider>, app);
