// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtWFZI0A3UtXZv1Wzh-hu-At6gK3CkLU4",
    authDomain: "siyam-sikder-246a9.firebaseapp.com",
    projectId: "siyam-sikder-246a9",
    storageBucket: "siyam-sikder-246a9.firebasestorage.app",
    messagingSenderId: "882783913033",
    appId: "1:882783913033:web:b9a4f5f4e8d62742bfeb98",
    measurementId: "G-V721ZVKDX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export default auth;
