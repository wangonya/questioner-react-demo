import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import Navbar from "./Navbar/Navbar.js";

class App extends Component {
  render() {
    return <Navbar />;
  }
}

export default App;
