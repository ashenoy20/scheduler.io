import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from './Login';

import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCkMOz_KNuv_KyyOj4uU6CGPaw6T-RFIRQ",
  authDomain: "schedulerio-2ab14.firebaseapp.com",
  projectId: "schedulerio-2ab14",
  storageBucket: "schedulerio-2ab14.appspot.com",
  messagingSenderId: "143273039615",
  appId: "1:143273039615:web:41c0ccfaee2dd86fb91eca"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
