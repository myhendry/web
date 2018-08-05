import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import authReducers from "./authReducers";

export default combineReducers({
  auth: authReducers,
  form: FormReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
