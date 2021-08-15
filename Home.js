import React, {useContext, useState, useEffect} from 'react'
import { AuthContext } from './AuthContextProvider'
import {fb} from './FireBase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useHistory } from 'react-router'


const db = firebase.firestore()

const Home = () => {

    

    const [email, setEmail] = useState("")
    const [chat, setChat] = useState(false)
    const [message, setMessage] = useState("")

    const url = useHistory()
    const signOutUser = async () => {
        await fb.signOut()
        url.push('/login')
    }

    const addTeacher = async (e) => {
        e.preventDefault()
        const teacherRef = db.collection('teachers').doc(`${email}`)
        const doc = await teacherRef.get()

        if(doc.exists){
            let user  = firebase.auth().currentUser
            teacherRef.update({
                students: firebase.firestore.FieldValue.arrayUnion(`${user.uid}`)
            })

            window.location.reload()
        }
    }

    const sendMessage = (e) => {
        e.preventDefault()

    }

    const userUID = firebase.auth().currentUser.uid
    let teacherRef = db.collection('teachers')
    

    useEffect(() => {
         teacherRef.where("students", "array-contains", `${userUID}`).get()
        .then((result) => {
            if(!result.empty){
                setChat(true)
            }else{
                setChat(false)
            }
        })

    }, [url])



    return (
        <>
            <div>
                <button onClick={signOutUser}>Sign Out</button>
            </div>

            <br />

            <form onSubmit={addTeacher}>
                <label htmlFor="teacherEmail">Teacher Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value) }/>
                <button type="submit">Add</button>
            </form>

            {chat ? 
                <div>
                    <br />
                    <br />
                    <form onSubmit={sendMessage}>
                        <input type="text" value={message} onChange={e => setMessage(e.target.value)}/>
                        <button type="submit">Send</button>
                    </form>
                </div>:<br/>
        
            }

        </>
    )
}

export default Home
