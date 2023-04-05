import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCdCN67uHgHsRZ2PbBw4wJXDA8cOzXiUiE",
  authDomain: "finalcart-62699.firebaseapp.com",
  projectId: "finalcart-62699",
  storageBucket: "finalcart-62699.appspot.com",
  messagingSenderId: "175711578361",
  appId: "1:175711578361:web:f49961ad7a86a248355a28",
  measurementId: "G-1MNM56RXWB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
