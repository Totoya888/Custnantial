// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBkH8jL5gPGhirCd9WrJ8shpLQl238l8E",
  authDomain: "custnantial.firebaseapp.com",
  projectId: "custnantial",
  storageBucket: "custnantial.appspot.com",
  messagingSenderId: "694889413702",
  appId: "1:694889413702:web:2ea497fb28bbf78c0d9e47",
  measurementId: "G-QBQ0F2TW6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);