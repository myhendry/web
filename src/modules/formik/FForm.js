import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

class FForm extends Component {
  state = {
    data: {
      events: "fasdfads"
    }
  };

  render() {
    return (
      <div>
        {this.state.data.events ? (
          <Formik
            initialValues={this.state.data}
            onSubmit={values =>
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
              }, 500)
            }
            render={({ values, touched, errors, isSubmitting }) => (
              <Form>
                <div>
                  {touched.title && errors.title && <p>{errors.title}</p>}
                  <Field name="title" placeholder="Title" />
                </div>
                <div>
                  {touched.city && errors.city && <p>{errors.city}</p>}
                  <Field name="city" placeholder="City" />
                </div>
                <div>
                  {touched.amount && errors.amount && <p>{errors.amount}</p>}
                  <Field name="amount" placeholder="Amount" />
                </div>
                <div>
                  {touched.email && errors.email && <p>{errors.email}</p>}
                  <Field type="email" name="email" placeholder="Email" />
                </div>
                <div>
                  {touched.password &&
                    errors.password && <p>{errors.password}</p>}
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <label>
                  <Field
                    type="checkbox"
                    name="newsletter"
                    checked={values.newsletter}
                  />
                  Join our newsletter
                </label>
                <Field component="select" name="plan">
                  <option value="free">Free</option>
                  <option value="premium">Premium</option>
                </Field>
                <button disabled={isSubmitting}>Submit</button>
              </Form>
            )}
          />
        ) : null}
      </div>
    );
  }
}

export default FForm;

// const FForm = ({ values, errors, touched, isSubmitting }) => (
//   <Form>
//     <div>
//       {touched.title && errors.title && <p>{errors.title}</p>}
//       <Field type="text" name="title" placeholder="Title" />
//     </div>
//     <div>
//       {touched.city && errors.city && <p>{errors.city}</p>}
//       <Field type="text" name="city" placeholder="City" />
//     </div>
//     <div>
//       {touched.amount && errors.amount && <p>{errors.amount}</p>}
//       <Field type="text" name="amount" placeholder="Amount" />
//     </div>
//     <div>
//       {touched.email && errors.email && <p>{errors.email}</p>}
//       <Field type="email" name="email" placeholder="Email" />
//     </div>
//     <div>
//       {touched.password && errors.password && <p>{errors.password}</p>}
//       <Field type="password" name="password" placeholder="Password" />
//     </div>
//     <label>
//       <Field type="checkbox" name="newsletter" checked={values.newsletter} />
//       Join our newsletter
//     </label>
//     <Field component="select" name="plan">
//       <option value="free">Free</option>
//       <option value="premium">Premium</option>
//     </Field>
//     <button disabled={isSubmitting}>Submit</button>
//   </Form>
// );

// const FormikApp = withFormik({
//   enableReinitialize: true,
//   mapPropsToValues({ title, city, amount, email, password, newsletter, plan }) {
//     return {
//       title: title || "",
//       city: city || "",
//       amount: amount || 0,
//       email: email || "",
//       password: password || "",
//       newsletter: newsletter || false,
//       plan: plan || "free"
//     };
//   },
//   validationSchema: Yup.object().shape({
//     email: Yup.string()
//       .email("Email not valid")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(9, "Password must be 9 characters or longer")
//       .required("Password is required")
//   }),
//   handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
//     setTimeout(() => {
//       if (values.email === "andrew@test.io") {
//         setErrors({ email: "That email is already taken" });
//       } else {
//         resetForm();
//       }
//       setSubmitting(false);
//     }, 2000);
//   }
// })(FForm);

// export default FormikApp;
