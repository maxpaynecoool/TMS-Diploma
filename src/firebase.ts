import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyCuLhNEq6vvtW2LNt4flC1gkX8mMO8avzg",
    authDomain: "kino-1f0ad.firebaseapp.com",
    projectId: "kino-1f0ad",
    storageBucket: "kino-1f0ad.appspot.com",
    messagingSenderId: "447474602261",
    appId: "1:447474602261:web:da54d224fdedb6e893591c",
    measurementId: "G-F9LXP51WKP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
