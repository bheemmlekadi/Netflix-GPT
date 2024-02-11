// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmWdbJzLAPJiQy4UNWjKyy1suP6PbQv6k",
  authDomain: "netflixgpt-8125c.firebaseapp.com",
  projectId: "netflixgpt-8125c",
  storageBucket: "netflixgpt-8125c.appspot.com",
  messagingSenderId: "807351231607",
  appId: "1:807351231607:web:3a99fdf6dadcb22a8ad272",
  measurementId: "G-KGV9V7QQXD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
