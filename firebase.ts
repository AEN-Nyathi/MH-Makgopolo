// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2k3sAWeI1_r8LzVIXFwKuOXnPin7rfdw",
  authDomain: "mh-makgopolo.firebaseapp.com",
  projectId: "mh-makgopolo",
  storageBucket: "mh-makgopolo.firebasestorage.app",
  messagingSenderId: "484219119839",
  appId: "1:484219119839:web:228e4d0cc551bb86d2e16a",
  measurementId: "G-GJRG6NH524"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };