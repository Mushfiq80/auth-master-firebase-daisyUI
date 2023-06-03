// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQXNeASBJ4qsiaU75qcnH9bV4pjLTZHg8",
  authDomain: "auth-firebase-context-ec3a9.firebaseapp.com",
  projectId: "auth-firebase-context-ec3a9",
  storageBucket: "auth-firebase-context-ec3a9.appspot.com",
  messagingSenderId: "650029689923",
  appId: "1:650029689923:web:46de46e39a12a6a8a2f8f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;