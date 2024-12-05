// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQv3xvgX9Ihqd0dUd5OWbUypaK-P4Y4A0",
  authDomain: "assinment-10-54ca9.firebaseapp.com",
  projectId: "assinment-10-54ca9",
  storageBucket: "assinment-10-54ca9.firebasestorage.app",
  messagingSenderId: "672161072518",
  appId: "1:672161072518:web:ed82bfc7dc31a677ca5807"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;