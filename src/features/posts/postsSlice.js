import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api/index'


 const initialState = { data: [], status: 'idle', error: null }

 export const fetchPosts = createAsyncThunk('fetchPosts', async() => {

    const response = await api
            .get('/search/anime?q=Ghibli&page=3')

    return response.data.results
 })


export const applyFilter = createAsyncThunk('applyFilter', async  (state, searchTerm) => (

   /* state.data.filter(f => f.includes(searchTerm)),*/
   /* console.log(state.data),
    console.log(searchTerm),*/
    console.log('82')
 )
)

 const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

        filterF(state, action) {

            console.log(63)
            console.log(state.status)
            console.log(state.data)

        },




    },

    extraReducers: {
        [fetchPosts.pending]: (state, action) => { state.status='pending' },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status='fulfilled';
            console.log('63');
            /*console.log(action.payload);*/
            state.data = state.data.concat(action.payload)
            //state.data.push(action.payload)
            console.log(state.data)
            console.log( state.data.filter((f) => f.title.startsWith('Chibi')  ) )
        },
        [fetchPosts.rejected]: (state, action) => { state.status = 'rejected'; state.error = action.error.message },
        [applyFilter.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            console.log(78);
            console.log(state.data)
        },


    },
})

 export const { postAdded, postAdded2, postUpdated, filterF } = postsSlice.actions
 export default postsSlice.reducer
 export const selectAllPosts = state => state.posts.data
 export const selectPostById = (state, postId) =>  (//neu dau { se sai

    console.log('94'),
    console.log( state.posts.data),
    state.data.find( post => post.mal_id == postId )
 )
 export const filterPostByTitle = (state, searchTerm) => (

  /*  state.data.filter(f => f.includes(searchTerm)),*/
    console.log(state.data),
    console.log('82')
 )

