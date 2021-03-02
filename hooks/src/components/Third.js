import React, { useContext } from 'react'
import UserContext from '../UserContext';

export default function Third() {
    const user = useContext(UserContext)
    console.log(user)
    return (
        <div>

        </div>
    )
}
