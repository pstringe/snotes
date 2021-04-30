import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEbU6JDKz06MtBKrz4bK7klm9k44DeKEw",
  authDomain: "notes-c54e1.firebaseapp.com",
  projectId: "notes-c54e1",
  storageBucket: "notes-c54e1.appspot.com",
  messagingSenderId: "278846034527",
  appId: "1:278846034527:web:59e7f36fe9171e108581ea",
  measurementId: "G-J5105C37RM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
