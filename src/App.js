import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MyCities from "./pages/MyCities";
import MyNotes from "./pages/MyNotes";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mycities">
            <MyCities />
          </Route>
          <Route path="/mynotes">
            <MyNotes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
