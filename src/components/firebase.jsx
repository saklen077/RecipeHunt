// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC670UqA1TKAC6ROrjwI4IB5neMJm8rDjQ",
  authDomain: "uthentication-88d49.firebaseapp.com",
  projectId: "uthentication-88d49",
  storageBucket: "uthentication-88d49.firebasestorage.app",
  messagingSenderId: "999223126966",
  appId: "1:999223126966:web:6ae1e5d4f0422ef1f9ef17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth = getAuth()