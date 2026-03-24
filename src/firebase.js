// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU8HnjUhPi8mVgmls3h5RG8gy8KkbpOKU",
  authDomain: "chordle-2f0a5.firebaseapp.com",
  projectId: "chordle-2f0a5",
  storageBucket: "chordle-2f0a5.firebasestorage.app",
  messagingSenderId: "180197362970",
  appId: "1:180197362970:web:421d173fba62bc42b930a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);