import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALvfzxOrbVNfLAY9YABu4L0imiiWrsXKo",
  authDomain: "e-commerce-4be0f.firebaseapp.com",
  projectId: "e-commerce-4be0f",
  storageBucket: "e-commerce-4be0f.appspot.com",
  messagingSenderId: "1097913902368",
  appId: "1:1097913902368:web:aaaefbff00d6d09718a345",
  measurementId: "G-K22ERFTDHR"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);