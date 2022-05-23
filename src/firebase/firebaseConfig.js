
import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjupAQvcJeH28fwnO3uk2-eDbffkNoOzg",
  authDomain: "monitorias-70215.firebaseapp.com",
  projectId: "monitorias-70215",
  storageBucket: "monitorias-70215.appspot.com",
  messagingSenderId: "838130461916",
  appId: "1:838130461916:web:28673439021d0e8edcd819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export{
    app, google,facebook, db
}