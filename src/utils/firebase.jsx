// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "netflix-gpt-d8f5e.firebaseapp.com",
  projectId: "netflix-gpt-d8f5e",
  storageBucket: "netflix-gpt-d8f5e.firebasestorage.app",
  messagingSenderId: "210723045675",
  appId: "1:210723045675:web:40f8200a0c4f0a294e056e",
  measurementId: "G-R1ET0T3H0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
