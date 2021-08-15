import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

const ChatMessage = ({text, sender}) => {
    const user = firebase.auth().currentUser.displayName

    return (
        <div>
            {sender === user ?
            <div>
                <h3>{text}</h3>
                <p>{sender}</p>
            </div>:
            <div>
                <h6>{text}</h6>
                <p>{sender}</p>
            </div>
        
        
            }
        </div>
    )
}

export default ChatMessage
