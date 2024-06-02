// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDELRdAse3AeEyis42cZTxxjqQMa2nL2_k",
  authDomain: "netflixgpt-d416b.firebaseapp.com",
  projectId: "netflixgpt-d416b",
  storageBucket: "netflixgpt-d416b.appspot.com",
  messagingSenderId: "1048476320728",
  appId: "1:1048476320728:web:16cee9378d85866e5aa8ad",
  measurementId: "G-22H08V3P0Z"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();