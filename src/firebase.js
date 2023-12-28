
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCJ1EwKBi3I8aNJ1W3HouFv31zpPv0Hfnw",
  authDomain: "aditya-ranjan-portfolio.firebaseapp.com",
  projectId: "aditya-ranjan-portfolio",
  storageBucket: "aditya-ranjan-portfolio.appspot.com",
  messagingSenderId: "242410589408",
  appId: "1:242410589408:web:73ee6550c55a250b8ed485"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();