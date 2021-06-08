import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postsSlice'
import { postAdded2 } from './postsSlice'
import { nanoid } from '@reduxjs/toolkit'


export const AddPostForm = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e =>  setContent(e.target.value)

    const onSelectChanged = e => {
        setUserId(e.target.value)
    }


    const users = useSelector(state => state.users)

    const usersOption = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    const dispatch = useDispatch()
    const onSaveChanged = () => {
        if(content && title ) {

            dispatch( postAdded (
                { id: nanoid(), title, content, user: userId})
            )
            /*dispatch( postAdded2 ( title, content, userId ) )*/

            setTitle('')
            setContent('')

        }

    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    return (

        <section>
        <h2>Add a New Post </h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={onTitleChanged}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea
              id="postContent"
              name="postContent"
              value={content}
              onChange={onContentChanged}
            />
            <label htmlFor="postContent">Users:</label>
            <select onChange={onSelectChanged}>
                <option>...</option>
                {usersOption}
            </select>

            <button type="button" onClick={onSaveChanged} disabled = {!canSave} >Save Post</button>
        </form>
        </section>
    )

}