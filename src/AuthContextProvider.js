import React, {createContext, useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import { fb } from './FireBase'


const AuthContext = createContext()

const AuthContextProvider = (props) => {

    const url = useHistory()
    const [user, setUser] = useState()
    const [status, setStatus] = useState(true)


    useEffect(() => {
        fb.onAuthStateChanged(user => {
            setUser(user)
            setStatus(false)
            if(user){
                url.push('/home')
            }else{
                url.push('/login')
            }  
        })
    }, [user, url])

    const result = user

    return (
        <AuthContext.Provider value={result}>
            {!status && props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

export {AuthContext}

