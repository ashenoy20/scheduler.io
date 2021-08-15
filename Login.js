import React, {useState} from 'react'

import firebase from 'firebase/app';
import 'firebase/firestore';
import {fb} from './FireBase'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = (e) => {
        e.preventDefault()
        const userEmail = email
        const userPassword = password
        
        fb.signInWithEmailAndPassword(userEmail, userPassword)
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            

            <div>
                <button onClick={() => { fb.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}}>Sign in with google as student</button>
            </div>

            <div>
            <br />
            <h3>Teacher Login</h3>
            <form onSubmit={signIn}>
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={ e => setEmail(e.target.value) } />
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value) }/>
                <button type="submit">Sign In</button>
            </form>
            <a href="/teacherSignUp">Don't have a teacher account? Sign Up!</a>
        </div>
        </>
    )
}

export default Login
