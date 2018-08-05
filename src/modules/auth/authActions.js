import { SubmissionError } from "redux-form";

import history from "../nav/history";

export const signIn = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
      // console.log("Logged In ", user);
      history.push("/");
    } catch (err) {
      throw new SubmissionError({
        _error: err.message
      });
    }
  };
};

export const signOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signOut();
      // console.log("Actions ", firebase);
    } catch (err) {
      console.log(err);
    }
  };
};

export const signUp = user => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    try {
      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);

      await createdUser.user.updateProfile({
        displayName: user.displayName
      });

      let newUser = {
        displayName: user.displayName,
        createdAt: firestore.FieldValue.serverTimestamp()
      };
      await firestore.set(`users/${createdUser.user.uid}`, { ...newUser });
      history.push("/");
    } catch (err) {
      throw new SubmissionError({
        _error: err.message
      });
    }
  };
};

export const socialLogin = selectedProvider => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.login({
        provider: selectedProvider,
        type: "popup"
      });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
};
