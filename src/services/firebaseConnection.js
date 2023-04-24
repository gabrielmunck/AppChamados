

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBxbSxt9XN4H0pUCkQlr7kujymvLtqmglw",
  authDomain: "appchamadosmunck.firebaseapp.com",
  projectId: "appchamadosmunck",
  storageBucket: "appchamadosmunck.appspot.com",
  messagingSenderId: "605471546367",
  appId: "1:605471546367:web:10eda0208b2953bd4925ca",
  measurementId: "G-79ZERKXN4F"
};

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)

const db = getFirestore(firebaseApp)

const storage = getStorage(firebaseApp)

export {auth, db, storage};