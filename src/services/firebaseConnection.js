
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCPs9lMdU1Pwow4zLXcoaAVxeGwunwe4ik",
  authDomain: "linktree-9436e.firebaseapp.com",
  projectId: "linktree-9436e",
  storageBucket: "linktree-9436e.appspot.com",
  messagingSenderId: "678828821399",
  appId: "1:678828821399:web:badfee94c84356eb2f52d2",
  measurementId: "G-WJD8DZ4EG6"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };

