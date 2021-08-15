import React, {useState} from 'react'

import {fb} from './FireBase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const db = firebase.firestore()

const Teacher = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    

    const signUp = async (e) => {
        e.preventDefault()
        const userEmail = email
        const userPassword = password
        
        const data = {
            messages: [],
            students: []
        }
        await db.collection('teachers').doc(`${userEmail}`).set(data)
        fb.createUserWithEmailAndPassword(userEmail, userPassword)
        .catch((error) => {
            console.log(error)
        })
        

    }

    return (
        <div>
            <form onSubmit={signUp}>
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={ e => setEmail(e.target.value) } />
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value) }/>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default Teacher
