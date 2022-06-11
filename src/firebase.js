// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhHk0dQ1KYxOsUVWnaH2f2uvN_54u1aB8",
  authDomain: "auth-avv.firebaseapp.com",
  projectId: "auth-avv",
  storageBucket: "auth-avv.appspot.com",
  messagingSenderId: "254713118424",
  appId: "1:254713118424:web:2ce3b33a41e072eb0d61ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
