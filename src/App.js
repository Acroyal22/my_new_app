import React from "react";
import "./index.css";
import "./Style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Business from "./Business";
import Tech from "./Tech";
import Politics from "./Politics";
import Home from "./Home";
import Sport from "./Sport";

const App = () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}{" "}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/business">
            <Business />
          </Route>
          <Route path="/politics">
            <Politics />
          </Route>
          <Route path="/sport">
            <Sport />
          </Route>
          <Route path="/tech">
            <Tech />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
