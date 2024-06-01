// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM4p9biaCc9Uyk_0gtALyoIcPYxhQf77M",
  authDomain: "finet-ed98b.firebaseapp.com",
  projectId: "finet-ed98b",
  storageBucket: "finet-ed98b.appspot.com",
  messagingSenderId: "340833707919",
  appId: "1:340833707919:web:fa8f72ff4ecd0b74ae4dfa",
  measurementId: "G-2DHBGC7DQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth };