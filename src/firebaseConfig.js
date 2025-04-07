import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLgPkc0q76jPNRcRsBF2yrjq2xrOW5XNk",
    authDomain: "hzs-studio.firebaseapp.com",
    projectId: "hzs-studio",
    storageBucket: "hzs-studio.firebasestorage.app",
    messagingSenderId: "175644757512",
    appId: "1:175644757512:web:f98e07b708d9bf9bfccbbd",
    measurementId: "G-DB821LE0BM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
