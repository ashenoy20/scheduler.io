import React from 'react'

import firebase from 'firebase/app'
import {fb} from './FireBase'

const Login = () => {
    return (
        <div>
            <button onClick={() => { fb.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}}>Sign in with google</button>
        </div>
    )
}

export default Login
