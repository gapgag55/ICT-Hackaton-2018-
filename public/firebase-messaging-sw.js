
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


// Initialize Firebase
var config = {
  apiKey: "AIzaSyC0eOrvEbqTzmwTjOvOWppGe-NlLw_tkbc",
  authDomain: "intro-firebase-react.firebaseapp.com",
  databaseURL: "https://intro-firebase-react.firebaseio.com",
  projectId: "intro-firebase-react",
  storageBucket: "intro-firebase-react.appspot.com",
  messagingSenderId: "586448718173"
};


firebase.initializeApp(config);
const messaging = firebase.messaging();