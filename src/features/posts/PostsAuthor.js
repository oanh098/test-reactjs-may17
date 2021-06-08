import React from 'react'
import { useSelector } from 'react-redux'

export const PostsAuthor = ({userId}) => {

    //logic
    const user = useSelector(state => state.users.find(user => user.id === userId))
    return(

    <p> {user.name} </p>
    )

}