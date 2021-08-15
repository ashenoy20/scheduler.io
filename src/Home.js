import React, {useContext, useState, useEffect} from 'react'
import { AuthContext } from './AuthContextProvider'
import {fb} from './FireBase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useHistory } from 'react-router'


const db = firebase.firestore()
let teacherEmail = null
const Home = () => {

    

    const [email, setEmail] = useState("")
    const [chat, setChat] = useState(false)
    const [message, setMessage] = useState("")
    const [msgArray, setArray] = useState([])

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

    const sendMessage = async (e) => {
        e.preventDefault()
        const teacherRef = db.collection('teachers').doc(`${teacherEmail}`)
        const doc = await teacherRef.get()

        if(doc.exists){
            let user  = firebase.auth().currentUser

            let data = {
                text: message,
                sender: user.displayName
            }
            teacherRef.update({
                messages: firebase.firestore.FieldValue.arrayUnion(data)
            })

        }

        window.location.reload()

    }

    const userUID = firebase.auth().currentUser.uid
    let teacherRef = db.collection('teachers')
    

    useEffect(() => {
         teacherRef.where("students", "array-contains", `${userUID}`).get()
        .then((result) => {
            if(!result.empty){
                teacherEmail = result.docs.at(0).id
                teacherRef.doc(teacherEmail).get()
                .then((info) => {
                    setArray(info.data().messages)
                })

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
                    {console.log(msgArray)}
                    { msgArray.map(msg => <h5>{msg.text}</h5>)}
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
