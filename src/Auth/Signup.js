import React, { Component } from "react";
import { Redirect } from "react-router";
import Loader from ".././Loader/Loader.js";
import Toast from ".././Toast/Toast.js";
import { connect } from "react-redux";
import { signUp } from ".././redux/actions/authActions";

import "./Auth.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      loading: false
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
    this.setState({ loading: true });
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

    this.props.signUp(jsonData);
  }

  renderLoading() {
    if (this.props.isSignedIn) {
      // redirect to home if signed up
      console.log("redirecting...");
      return <Redirect to="/" />;
    }
    return <Loader />;
  }

  renderForm() {
    return (
      <div>
        {this.props.error && (
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

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(
  mapStateToProps,
  { signUp }
)(Signup);
