import React, {createContext, useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import { fb } from './FireBase'


const AuthContext = createContext()

const AuthContextProvider = (props) => {

    const url = useHistory()
    const [user, setUser] = useState(null)


    useEffect(() => {
        fb.onAuthStateChanged(user => {
            setUser(user)
            if(user !== null){
                url.push('/home')
            }
            
            
        })
    }, [user, url])

    return (
        <AuthContext.Provider value={user}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

