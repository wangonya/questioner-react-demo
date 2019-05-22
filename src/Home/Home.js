import React, { Component } from "react";
import { connect } from "react-redux";

import "./Home.css";

import Loader from ".././Loader/Loader.js";
import { fetchMeetups } from ".././redux/actions/meetupActions";

class Home extends Component {
  componentDidMount() {
    this.props.fetchMeetups();
  }

  renderLoading() {
    return <Loader />;
  }

  renderError() {
    return <div>Uh oh: {this.props.error.message}</div>;
  }

  renderMeetups() {
    if (this.props.error) {
      return this.renderError();
    }

    let main_meetup = this.props.meetups[0];

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
        {this.props.meetups.splice(1).map(meetup => (
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
        {this.props.loading ? this.renderLoading() : this.renderMeetups()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meetups: state.meetups.meetups,
  loading: state.meetups.loading,
  error: state.meetups.error
});

export default connect(
  mapStateToProps,
  { fetchMeetups }
)(Home);
