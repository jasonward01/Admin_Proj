// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkUz4-sYiwwsSqUPN-_WTJH7u7Z_X-5AM",
  authDomain: "nursesdatabase-cd5b1.firebaseapp.com",
  projectId: "nursesdatabase-cd5b1",
  storageBucket: "nursesdatabase-cd5b1.appspot.com",
  messagingSenderId: "502116727008",
  appId: "1:502116727008:web:159027c692255f5e727885",
  measurementId: "G-YP3DFFRX6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);