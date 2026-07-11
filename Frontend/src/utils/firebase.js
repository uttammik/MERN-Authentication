// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-mern-81e4c.firebaseapp.com",
  projectId: "ai-mern-81e4c",
  storageBucket: "ai-mern-81e4c.firebasestorage.app",
  messagingSenderId: "904851313779",
  appId: "1:904851313779:web:b0867fc6d7ff2d49444606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()


export {auth, provider}