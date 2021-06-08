import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { postUpdated, selectPostById } from './postsSlice'
import { useHistory } from 'react-router-dom'

export const EditPostForm = ({match}) => {

    const {postId} = match.params
    /*const post = useSelector(state => state.posts.find(post => post.id === postId ))*/
    const post = useSelector(state => selectPostById(state, postId))

    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const dispatch = useDispatch()
    const history = useHistory()
    const onSaveChanged = () => {
        if(title && content){

        dispatch( postUpdated({ id:postId, title, content }) )
        history.push(`/posts/${postId}`)

        }
    }


    if(!post)
    {
        return(<div>Post not found</div>)
    }

    return (

    <section>
        <h2>Edit a Post</h2>
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
            <button type="button" onClick={onSaveChanged}>Save Post</button>
        </form>
        </section>
    )
}