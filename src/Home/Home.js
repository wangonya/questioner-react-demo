import React, { Component } from "react";
import axios from "axios";

import "./Home.css";

import Loader from ".././Loader/Loader.js";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meetups: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios
      .get("https://questioner2.herokuapp.com/api/v2/meetups/upcoming")
      .then(res => {
        const meetups = res.data.data;

        // update state to trigger re-render
        this.setState({
          meetups,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        // save err in state and re-render
        this.setState({
          loading: false,
          error: err
        });
      });
  }

  renderLoading() {
    return <Loader />;
  }

  renderError() {
    return <div>Uh oh: {this.state.error.message}</div>;
  }

  renderMeetups() {
    if (this.state.error) {
      return this.renderError();
    }

    let main_meetup = this.state.meetups[0];

    return (
      <div className="meetups">
        <div className="grid-item main">
          <img src={main_meetup.image} alt="meetup image" />
          <div className="text-block">
            <a href="">
              <h2>{main_meetup.title}</h2>
            </a>
            <small>{main_meetup.happening_on}</small>
            <br />
            <p>{main_meetup.details}</p>
          </div>
        </div>
        {this.state.meetups.splice(1).map(meetup => (
          <div className="grid-item featured" key={meetup.id}>
            <img src={meetup.image} alt="meetup image" />
            <div className="text-block">
              <a href="">
                <h4>{meetup.title}</h4>
              </a>
              <small>{meetup.happening_on}</small>
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="home">
        <h2 className="title">Upcoming Meetups</h2>
        {this.state.loading ? this.renderLoading() : this.renderMeetups()}
      </div>
    );
  }
}

export default Home;
