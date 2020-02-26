import React from "react";
import "./App.css";
// using ES6 modules
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import Home from "./container/Home";
const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path={"/Home"} component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
