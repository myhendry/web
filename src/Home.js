import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";
import { Button } from "semantic-ui-react";

import { signOut } from "./modules/auth/authActions";

class Home extends Component {
  render() {
    // console.log("Home Props", this.props);
    const { auth, signOut } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;

    return (
      <div>
        <p>Home</p>
        <Link to={"/"}>Home | </Link>
        <Link to={"/signup"}>Signup | </Link>
        <Link to={"/login"}>Login | </Link>
        <Link to={"/list"}>List | </Link>
        <Link to={"/rform"}>Create | </Link>
        <Link to={"/fform"}>Formik | </Link>
        <div>{authenticated ? <p>{auth.email}</p> : null}</div>
        {authenticated && (
          <div>
            <Button
              fluid
              size="large"
              color="teal"
              onClick={this.props.firebase.logout}
            >
              Log Out
            </Button>
            <Button fluid size="large" color="teal" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        )}
        <div>
          ACTIVITIES:
          <br />
          <ul>
            <li>Create 👍</li>
            <li>Update</li>
            <li>User</li>
            <li>Non-Strings</li>
            <li>Pagination</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default withFirebase(
  connect(
    mapStateToProps,
    { signOut }
  )(Home)
);
