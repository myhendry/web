// WORKING OK
// import firebase from "firebase";
// import "firebase/firestore";
// import firebaseConfig from "./firebaseConfig";
// export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export default firebaseApp.firestore();

import firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
export const fb = firebase.initializeApp(firebaseConfig);
export const fs = fb.firestore();

const settings = {
  timestampsInSnapshots: true
};

fs.settings(settings);
