import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";

import { fb } from "../../firebase/firebase";
// import firebase from "../../firebase/firebase";
import rootReducer from "../reducers";

// Refer to App.js for wrapping of App component

const rrfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true
};

export const configureStore = preloadedState => {
  const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer = compose(
    ...storeEnhancers,
    reactReduxFirebase(fb, rrfConfig),
    reduxFirestore(fb)
  );

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
};
