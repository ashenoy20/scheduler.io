import React from 'react'

import { useHistory } from 'react-router'
import {fb} from './FireBase'

const TeacherHome = () => {

    const url = useHistory()
    const signOutUser = async () => {
        await fb.signOut()
        url.push('/login')
    }

    return (
        <>
            <div>
                <button onClick={signOutUser}>Sign Out</button>
            </div>
            <div>

            </div>


        </>
    )
}

export default TeacherHome
