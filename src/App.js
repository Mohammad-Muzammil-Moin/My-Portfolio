import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import "./App.css";
import MyPortfolio from "./MyPortfolio";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/My-Portfolio" component={MyPortfolio} />
        <Route exact path="/control" component={Dashboard} />
        {/* <Redirect component={MyPortfolio} /> */}
      </Switch>
    </Router>
  );
}

export default App;
