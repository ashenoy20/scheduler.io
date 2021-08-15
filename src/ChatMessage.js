import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import './ChatMessage.css'

const ChatMessage = ({text, sender}) => {
    const user = firebase.auth().currentUser.displayName

    return (
        <>
            {sender === user ?
            <div className="message-blue">
                <p className="message-content">{text}</p>
                <p className="message-timestamp-left">{sender}</p>
            </div>:
            <div className="message-orange">
                <p className="message-content">{text}</p>
                <p className="message-timestamp-right">{sender}</p>
            </div>
        
        
            }
        </>
    )
}

export default ChatMessage
