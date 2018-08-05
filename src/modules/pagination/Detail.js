import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";

class Detail extends Component {
  async componentDidMount() {
    const {
      match: { params },
      history,
      firestore
    } = this.props;
    let event = await firestore.get(`/events/${params.id}`);
    // console.log(event);
    if (!event.exists) {
      history.push("/list");
    }
  }

  render() {
    // console.log("Detail Props", this.props);
    const { event } = this.props;
    return (
      <div>
        <h1>Detail</h1>
        <br />
        <Link to={"/"}>Home | </Link> <br />
        <Link to={"/list"}>List | </Link>
        <div>
          <p>
            {event.title} {event.city}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("Detail State ", state);
  let event = {};

  const { events } = state.firestore.ordered;

  if (events && events[0]) {
    event = events[0];
  }

  return {
    event
  };
};

export default withFirestore(
  connect(
    mapStateToProps,
    null
  )(Detail)
);
