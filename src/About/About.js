import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div data-test="about-page-component">
        <h1>Welcome to Questioner</h1>
        <h3>Crowd-source questions for a meetup</h3>
        <br />
        <p>
          Questioner helps the meetup organizer prioritize questions to be
          answered. Other users can vote on asked questions and they bubble to
          the top or bottom of the log.
        </p>
      </div>
    );
  }
}

export default About;
