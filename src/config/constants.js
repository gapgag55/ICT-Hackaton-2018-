import firebase from 'firebase'

 var config = {
  apiKey: "AIzaSyDb3r63h1UMOfB-D7eH5k0cAWp8hwmcpls",
  authDomain: "data-science-project-by-poom.firebaseapp.com",
  databaseURL: "https://data-science-project-by-poom.firebaseio.com",
  projectId: "data-science-project-by-poom",
  storageBucket: "data-science-project-by-poom.appspot.com",
  messagingSenderId: "490804159277"
};

firebase.initializeApp(config);

export const database = firebase.database()
export const firebaseAuth = firebase.auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();

// Notification
export const messaging = firebase.messaging();