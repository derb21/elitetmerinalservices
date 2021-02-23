import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDg5oQa5rpfyu4kKFiYNDgvZ4ukTsmO6Qg",
  authDomain: "elite-terminal-services.firebaseapp.com",
  databaseURL: "https://elite-terminal-services-default-rtdb.firebaseio.com",
  projectId: "elite-terminal-services",
  storageBucket: "elite-terminal-services.appspot.com",
  messagingSenderId: "811955200115",
  appId: "1:811955200115:web:0fe04e687593c6a644ca06",
  measurementId: "G-BHTK9FFW23"
};

firebase.initializeApp(firebaseConfig);

// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://elite-terminal-services-default-rtdb.firebaseio.com"
// });
