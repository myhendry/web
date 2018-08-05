import React from "react";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import TextInput from "../../common/TextInput";
import SocialLogin from "./SocialLogin";
import { signIn, socialLogin } from "./authActions";
// import { login, socialLogin } from '../authActions'
// import SocialLogin from '../SocialLogin/SocialLogin'

// const actions = {
//   login,
//   socialLogin
// }

const LoginForm = ({ signIn, socialLogin, handleSubmit, error }) => {
  return (
    <Form size="large" onSubmit={handleSubmit(signIn)}>
      <Segment>
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
        <Button fluid size="large" color="teal">
          Sign In
        </Button>
        <Divider horizontal>Or</Divider>
        <SocialLogin socialLogin={socialLogin} />
        <Link to={"/"}>Home </Link>
        {/* <SocialLogin socialLogin={socialLogin} /> */}
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  { signIn, socialLogin }
)(reduxForm({ form: "loginForm" })(LoginForm));
