import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Jeopardy from "./component/jeopardy/Jeopardy";
import { BrowserRouter, Link, Switch, Route, Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/jeopardy" /> Jeopardy
          </li>
        </ul>
        <Route path="/" component={Jeopardy} />
      </div>
    </Router>
  );
}

export default App;
