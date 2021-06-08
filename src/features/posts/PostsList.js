import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AddPostForm } from './AddPostForm'
import { Link } from 'react-router-dom'
import { PostsAuthor } from './PostsAuthor'
import { useDispatch } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import FilterByTitle from '../filter/FilterByTitle'

export const PostsList = () => {


    const posts = useSelector(selectAllPosts)

    const postStatus = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)

    /*useEffect(() => {
        if(postStatus === 'idle') {

            dispatch(fetchPosts())
        }

    }, [postStatus, dispatch])*/

   /* console.log('27')
    console.log(posts)*/

    let content

    if(postStatus === 'pending') {
        content = <div>Loading</div>
    } else if (postStatus === 'fulfilled') {

        content = posts.map( post => (
            <div key={post.mal_id}>
                <h3>{post.title}</h3>
                <img src={post.image_url} />
                <p>{post.synopsis}</p>

                <Link to={`/posts/${post.mal_id}`}>More..</Link>
            </div>

        ) )
    } else if (postStatus === 'rejected') { content = <div>{error}</div>}


    return (
        <div>

            <FilterByTitle />
            { content }
            <AddPostForm />
        </div>
    )
}