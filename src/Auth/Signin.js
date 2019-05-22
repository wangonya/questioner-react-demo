import React, { Component } from "react";
import { Redirect } from "react-router";
import Loader from ".././Loader/Loader.js";
import Toast from ".././Toast/Toast.js";
import { connect } from "react-redux";
import { signIn } from ".././redux/actions/authActions";

import "./Auth.css";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", loading: false };
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
    this.setState({ loading: true });
    let bodyFormData = new FormData();
    event.preventDefault();
    bodyFormData.set("email", this.state.email);
    bodyFormData.set("password", this.state.password);
    let jsonData = {};
    bodyFormData.forEach((value, key) => {
      jsonData[key] = value;
    });

    this.props.signIn(jsonData);
  }

  renderLoading() {
    if (this.props.isSignedIn) {
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

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(
  mapStateToProps,
  { signIn }
)(Signin);
