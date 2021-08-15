import React from 'react'

import firebase from 'firebase/app';
import 'firebase/firestore';
import {fb} from './FireBase'

const db = firebase.firestore()

const Login = () => {



    const teacherLogin = () => {
        const r = db.collection('users').doc('admin')
        
        r.get().then((doc) => {
            console.log(doc.data())
        })
        
    }

    const studentLogin = () => {

    }


    return (
        <>
            <div>
                <button onClick={teacherLogin}>Sign in with google as teacher</button>
            </div>

            <div>
                <button onClick={() => { fb.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}}>Sign in with google as student</button>
            </div>
        </>
    )
}

export default Login
