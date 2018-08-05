import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

class List extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        <h1>List</h1>
        <br />
        <Link to={"/"}>Home </Link>
        <div>
          {events &&
            events.map(x => (
              <div key={x.id}>
                <p>
                  {/* {moment(x.date["seconds"]).format("DD MMM YYYY hh:mm a")}
                  <br />  */}
                  {x.title} {x.city} {x.description}
                  <br />
                  <Link to={`/detail/${x.id}`}>Detail | </Link>
                  <Link to={`/rform/${x.id}`}>Edit | </Link>
                  <br />
                  - - - - - - - - - - - - - - <br />
                </p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    events: state.firestore.ordered.events
  };
};

export default connect(
  mapStateToProps,
  null
)(firestoreConnect([{ collection: "events" }])(List));
