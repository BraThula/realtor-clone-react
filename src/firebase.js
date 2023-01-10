// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZl3n6KBvJu6jhKNiO0h6nIkFBqrA1D1A",
  authDomain: "realtor-clone-react-f0b9d.firebaseapp.com",
  projectId: "realtor-clone-react-f0b9d",
  storageBucket: "realtor-clone-react-f0b9d.appspot.com",
  messagingSenderId: "90517038132",
  appId: "1:90517038132:web:e6c9b949dbd9088d0fd661",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
