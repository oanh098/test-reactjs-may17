import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { searchById } from '../../redux/actions'


export function PostDetailView ({ match, existingPost, dispatch }) {


    console.log('7')
    console.log(match.params)
    const postId = match.params
    console.log(existingPost)

    useEffect(() => dispatch(searchById(postId)) )

    return (
        <div>

            <h1>Post Detail View</h1>


        </div>
    )
}

const mapStateToProps = state => ({
  existingPost: state.postsReducer.existingPost
})


export default connect(mapStateToProps)(PostDetailView)