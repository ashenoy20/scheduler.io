import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCkMOz_KNuv_KyyOj4uU6CGPaw6T-RFIRQ",
    authDomain: "schedulerio-2ab14.firebaseapp.com",
    projectId: "schedulerio-2ab14",
    storageBucket: "schedulerio-2ab14.appspot.com",
    messagingSenderId: "143273039615",
    appId: "1:143273039615:web:41c0ccfaee2dd86fb91eca"
};

export const fb = firebase.initializeApp(firebaseConfig).auth()