import React from "react";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { combineValidators, isRequired } from "revalidate";
import TextInput from "../../common/TextInput";
import { signUp } from "./authActions";
// import { login, socialLogin } from '../authActions'
// import SocialLogin from '../SocialLogin/SocialLogin'

// const actions = {
//   login,
//   socialLogin
// }
const validate = combineValidators({
  displayName: isRequired("displayName"),
  email: isRequired("email"),
  password: isRequired("password")
});

const SignupForm = ({ signUp, handleSubmit, error, invalid, submitting }) => {
  return (
    <Form size="large" onSubmit={handleSubmit(signUp)}>
      <Segment>
        <Field
          name="displayName"
          component={TextInput}
          type="text"
          placeholder="Display Name"
        />
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error && <Label color="red">{error}</Label>}
        <Button
          disabled={invalid || submitting}
          fluid
          size="large"
          color="teal"
        >
          Sign Up
        </Button>
        <Divider horizontal>Or</Divider>
        <Link to={"/"}>Home </Link>
        {/* <SocialLogin socialLogin={socialLogin} /> */}
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  { signUp }
)(reduxForm({ form: "signupForm", validate })(SignupForm));
