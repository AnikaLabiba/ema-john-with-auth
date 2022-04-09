// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqsp6AzjdPEZGCeP_tX3vBl2lWg_1g2zE",
    authDomain: "simple-ema-john-8a834.firebaseapp.com",
    projectId: "simple-ema-john-8a834",
    storageBucket: "simple-ema-john-8a834.appspot.com",
    messagingSenderId: "339660838957",
    appId: "1:339660838957:web:97c3aaf48506a7fe6640a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;