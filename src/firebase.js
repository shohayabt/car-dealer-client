// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAkXJID8hWxPRworg-IOyglcXVTE21L58",
  authDomain: "assignment-11-54f8e.firebaseapp.com",
  projectId: "assignment-11-54f8e",
  storageBucket: "assignment-11-54f8e.appspot.com",
  messagingSenderId: "54940238194",
  appId: "1:54940238194:web:55a01d931e28e85b455deb",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
