import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { reduxForm, Field } from "redux-form";
import {
  composeValidators,
  combineValidators,
  isRequired,
  isNumeric
} from "revalidate";
import { Form, Segment, Button } from "semantic-ui-react";

import TextInput from "../../common/TextInput";
import RadioInput from "../../common/RadioInput";
import DateInput from "../../common/DateInput";
import { createEvent } from "../redux/actions";

const validate = combineValidators({
  title: isRequired({ message: "Title is required" }),
  city: isRequired({ message: "City is required" }),
  amount: composeValidators(
    isRequired({ message: "Amount is required" }),
    isNumeric({ message: "Amount must be a number" })
  )()
});

class RForm extends Component {
  async componentDidMount() {
    const {
      firestore,
      match: { params }
    } = this.props;

    if (params.id) {
      await firestore.get(`/events/${params.id}`);
    }
  }

  _onFormSubmit = values => {
    const { createEvent } = this.props;

    if (this.props.initialValues.id) {
      console.log("Edited Values ", values);
    } else {
      console.log("New Values", values);
      createEvent(values);
    }
  };

  render() {
    const { invalid, submitting, pristine, loading, handleSubmit } = this.props;
    return (
      <div>
        <h1>Form</h1>
        <br />
        <Link to={"/"}>Home </Link>
        <div>
          <Segment>
            <Form onSubmit={handleSubmit(this._onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Title"
              />
              <Field
                name="city"
                type="text"
                component={TextInput}
                placeholder="City"
              />
              <Field
                name="amount"
                type="text"
                component={TextInput}
                placeholder="Amount"
              />
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="Date and Time of Event"
              />
              <Button
                loading={loading}
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button
                disabled={loading}
                onClick={() => this.props.history.push("/list")}
                type="button"
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  let event = {};

  if (!ownProps.match.params.id) {
    event = {};
  } else {
    // event = state.firestore.ordered.events[0];
  }

  return {
    initialValues: event
  };
};

export default connect(
  mapStateToProps,
  { createEvent }
)(
  firestoreConnect([{ collection: "events" }])(
    reduxForm({ form: "eventForm", enableReinitialize: true, validate })(RForm)
  )
);
