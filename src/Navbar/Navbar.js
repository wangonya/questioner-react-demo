import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./Navbar.css";

import Home from ".././Home/Home.js";
import About from ".././About/About.js";
import Signup from ".././Auth/Signup.js";
import Signin from ".././Auth/Signin.js";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className="nav">
          <div className="nav-header">
            <div className="nav-title">
              <Link to="/">
                <h3>Questioner</h3>
              </Link>
            </div>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span /> <span /> <span />
            </label>
          </div>
          <input type="checkbox" id="nav-check" />
          <div className="nav-links">
            <Link to="/about/">About</Link>
            <Link to="/signin/">Sign in</Link>
            <Link to="/signup/">Sign up</Link>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/signup/" component={Signup} />
          <Route path="/signin/" component={Signin} />
        </div>
      </Router>
    );
  }
}

export default Navbar;
