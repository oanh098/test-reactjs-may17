import { createSlice } from '@reduxjs/toolkit'


const initialState = [{id: '0', name: 'oanh'}, {id: '1', name: 'someone'}]

const usersSlice = createSlice({ name: 'usersName', initialState, reducers: {} })

export default usersSlice.reducer