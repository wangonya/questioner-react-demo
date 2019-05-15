import React, { Component } from "react";
import { Redirect } from "react-router";
import Loader from ".././Loader/Loader.js";
import Toast from ".././Toast/Toast.js";
import axios from "axios";

import "./Auth.css";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loading: false,
      error: null,
      isSignedIn: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    let bodyFormData = new FormData();
    event.preventDefault();
    bodyFormData.set("email", this.state.email);
    bodyFormData.set("password", this.state.password);
    let jsonData = {};
    bodyFormData.forEach((value, key) => {
      jsonData[key] = value;
    });
    this.setState({
      loading: true
    });
    axios
      .post("https://questioner2.herokuapp.com/api/v2/auth/login/", jsonData)
      .then(res => {
        if (res.status === 200) {
          sessionStorage.setItem("token", res.data.data[0].access_token);
          this.setState({
            loading: false,
            isSignedIn: true
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false,
          error: err
        });
        setTimeout(() => {
          this.setState({
            error: null
          });
        }, 3700);
      });
  }

  renderLoading() {
    return <Loader />;
  }

  renderForm() {
    if (this.state.isSignedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        {this.state.error && (
          <Toast type="err" message="Something went wrong" />
        )}
        <div className="auth">
          <form className="form" onSubmit={this.handleSubmit}>
            <h1 className="auth-title">Sign in</h1>
            <input
              type="email"
              className="auth-input"
              placeholder="Email Adress*"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              type="password"
              className="auth-input"
              placeholder="Password*"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <input
              readOnly
              type="Submit"
              value="Sign in"
              className="auth-button"
            />
            <div className="auth-more">
              <p>
                <a href="../signup/">
                  <small>No account? Sign up</small>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>{this.state.loading ? this.renderLoading() : this.renderForm()}</div>
    );
  }
}

export default Signin;
