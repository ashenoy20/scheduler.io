import React, {useState, useEffect} from 'react'
import {fb} from './FireBase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useHistory } from 'react-router'
import ChatMessage from './ChatMessage'


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

            setChat(true)
        
        }

        window.location.reload()
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
            await teacherRef.update({
                messages: firebase.firestore.FieldValue.arrayUnion(data)
            })
            teacherRef.get()
                .then((info) => {
                    setArray(info.data().messages)
                })

        }
       
    }

    
    

    useEffect(() => {
        const userUID = firebase.auth().currentUser.uid
        let teacherRef = db.collection('teachers')
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

    }, [url, msgArray])



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
                    { msgArray.map((msg, index) => <ChatMessage text={msg.text} sender={msg.sender} key={index}/>)}
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
