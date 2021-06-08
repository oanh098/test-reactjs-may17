import { FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR,
    SORT_BY_ALPHABET, SORT_BY_SCORE, FILTER_BY_TITLE, FILTER_BY_API, SEARCH_BY_ID, LOAD_EXACT_PAGE
} from './actionTypes'


export const fetchPostsPending = () => (
    { type: FETCH_POSTS_PENDING})
export const fetchPostsSuccess = (payload) => (
    { type:FETCH_POSTS_SUCCESS, payload})
export const fetchPostsError = (error) => (
    { type:FETCH_POSTS_ERROR, error })
export const sortByAlphabet = (payload) => (
    { type: SORT_BY_ALPHABET, payload })
export const sortByScore = (payload) => (
    { type: SORT_BY_SCORE, payload })
export const filterByTitle = (payload) => (
    { type: FILTER_BY_TITLE, payload })
export const searchById = (payload) => (
    { type: SEARCH_BY_ID, payload })
export const loadExactPage = (payload) => (
    { type: LOAD_EXACT_PAGE, payload })
