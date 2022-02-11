// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBzhMFloI0y43mBsM5eJEon2z9Zhv3IP08",
  authDomain: "react-todolist-bedc9.firebaseapp.com",
  databaseURL: "https://react-todolist-bedc9-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "react-todolist-bedc9",
  storageBucket: "react-todolist-bedc9.appspot.com",
  messagingSenderId: "664428468944",
  appId: "1:664428468944:web:009482852082a5e2bf1cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);