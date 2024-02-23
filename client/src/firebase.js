// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-80d97.firebaseapp.com",
  projectId: "mern-estate-80d97",
  storageBucket: "mern-estate-80d97.appspot.com",
  messagingSenderId: "346407244617",
  appId: "1:346407244617:web:91a067839da5a8e76f0098",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
