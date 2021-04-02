import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCYCNkt9EOm_mGdzt9Xv6i-_0IgUnnn7Kw",
  authDomain: "project10-faa68.firebaseapp.com",
  projectId: "project10-faa68",
  storageBucket: "project10-faa68.appspot.com",
  messagingSenderId: "271835035825",
  appId: "1:271835035825:web:8892e206be538697828a90",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
