// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcMuCyR3l3FnIEddn_FHs2vR6gxd-72hg",
  authDomain: "react-notes-f301e.firebaseapp.com",
  projectId: "react-notes-f301e",
  storageBucket: "react-notes-f301e.appspot.com",
  messagingSenderId: "575521960831",
  appId: "1:575521960831:web:251bfd5026b3f90a7ca04a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")