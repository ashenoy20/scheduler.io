import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCEXcuVN2aa-hfzs5KkdVfo27Oi3BdhYgM",
    authDomain: "schedulario.firebaseapp.com",
    projectId: "schedulario",
    storageBucket: "schedulario.appspot.com",
    messagingSenderId: "373313680738",
    appId: "1:373313680738:web:820924ba6ed959ea5f683b"
  };



export const fb = firebase.initializeApp(firebaseConfig).auth()

//firebase.firestore().enablePersistence()