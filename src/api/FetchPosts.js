import { fetchPostsPending,
        fetchPostsSuccess,
        fetchPostsError, loadExactPage } from '../redux/actions'



 function FetchPosts() {
    console.log('6 fetch')


    return dispatch => {


       dispatch(fetchPostsPending())

        fetch('https://api.jikan.moe/v3/search/anime?q=Ghibli&page=3')
        .then(res => res.json())
        .then(res => {
            if(res.error){ throw (res.error) }
            dispatch(fetchPostsSuccess(res.results))
            return res.posts
        })


        .then(() => {dispatch(loadExactPage(-1))})

        .catch(error => { dispatch(fetchPostsError(error)) })



    }
}

export default FetchPosts


