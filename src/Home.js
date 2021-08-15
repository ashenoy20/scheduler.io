import React, {useContext} from 'react'
import { AuthContext } from './AuthContextProvider'
import {fb} from './FireBase'
import { useHistory } from 'react-router'

const Home = () => {

    let context = useContext(AuthContext)

    const url = useHistory()
    const signOutUser = async () => {
        await fb.signOut()
        url.push('/login')
    }

    return (
        <div>
            <button onClick={signOutUser}>{context.displayName}</button>
        </div>
    )
}

export default Home
