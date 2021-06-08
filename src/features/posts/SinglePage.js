import React from 'react'
import { useSelector, connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectPostById } from './postsSlice'

export const SinglePage = ({match}) => {

    const {postId} = match.params

    console.log('10')

    const post = useSelector( state => selectPostById(state,postId))

    if(!post) {
        return (
            <div>Post not found</div>
        )
    }

    return(

        <div>
            <h3>{post.mal_id}</h3>
            <p>{post.title}</p>
            <Link to={`/editPost/${post.id}`}>Edit</Link>
        </div>
    )
}

const mapStateToProps = state => {
    const {posts} = state.postsReducer
    return {posts}
}

