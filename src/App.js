import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./Home/Home.js";
import About from "./About/About.js";
import Signup from "./Auth/Signup.js";
import Signin from "./Auth/Signin.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/signup/">Signup</Link>
              </li>
              <li>
                <Link to="/signin/">Signin</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/signup/" component={Signup} />
          <Route path="/signin/" component={Signin} />
        </div>
      </Router>
    );
  }
}

export default App;
