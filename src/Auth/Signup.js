import React, { Component } from "react";
import { Redirect } from "react-router";
import Loader from ".././Loader/Loader.js";
import Toast from ".././Toast/Toast.js";
import axios from "axios";

import "./Auth.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      loading: false,
      error: null,
      isSignedUp: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // without this the input field would be read only
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    let bodyFormData = new FormData();
    event.preventDefault();
    bodyFormData.set("firstname", this.state.firstName);
    bodyFormData.set("lastname", this.state.lastName);
    bodyFormData.set("email", this.state.email);
    bodyFormData.set("password", this.state.password);
    bodyFormData.set("phonenumber", 0);
    let jsonData = {};
    bodyFormData.forEach((value, key) => {
      jsonData[key] = value;
    });
    this.setState({
      loading: true
    });
    axios
      .post("https://questioner2.herokuapp.com/api/v2/auth/signup/", jsonData)
      .then(res => {
        if (res.status === 201) {
          sessionStorage.setItem("token", res.data.data[0].access_token);
          this.setState({
            loading: false,
            isSignedUp: true
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
    if (this.state.isSignedUp) {
      // redirect to home if signed up
      return <Redirect to="/" />;
    }
    return (
      <div>
        {this.state.error && (
          <Toast type="err" message="Something went wrong" />
        )}
        <div className="auth">
          <form className="form" onSubmit={this.handleSubmit}>
            <h1 className="auth-title">Sign up</h1>
            <input
              type="text"
              className="auth-input"
              placeholder="First Name*"
              autoFocus
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="auth-input"
              placeholder="Last Name*"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
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
              value="Sign up"
              className="auth-button"
            />
            <div className="auth-more">
              <p>
                <a href="../signin/">
                  <small>Already have an account? Log in</small>
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

export default Signup;
