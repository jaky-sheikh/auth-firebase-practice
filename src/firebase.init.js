// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsvJSIvT7HA2h_cf60hRhnO_n81lDDx4Y",
  authDomain: "auth-firebase-practice-66901.firebaseapp.com",
  projectId: "auth-firebase-practice-66901",
  storageBucket: "auth-firebase-practice-66901.firebasestorage.app",
  messagingSenderId: "1066107659902",
  appId: "1:1066107659902:web:434e056faa3492dcecda2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);