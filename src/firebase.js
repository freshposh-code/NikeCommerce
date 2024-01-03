// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwmbVg8RlLzxP12X9jgby8mgDFcvYVb9A',
  authDomain: "posh-nikestore.firebaseapp.com",
  projectId: "posh-nikestore",
  storageBucket: "posh-nikestore.appspot.com",
  messagingSenderId: "218971176194",
  appId: "1:218971176194:web:b9eb2b066034a055c8561b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
