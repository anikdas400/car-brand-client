// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWwdNeRV5rSC3iHSMhIOa0qxxkk7fOxhc",
  authDomain: "car-brand-5409d.firebaseapp.com",
  projectId: "car-brand-5409d",
  storageBucket: "car-brand-5409d.appspot.com",
  messagingSenderId: "440037914398",
  appId: "1:440037914398:web:6efecee63f1112e0123b0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;