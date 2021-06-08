
import { FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR,
    SORT_BY_ALPHABET, SORT_BY_SCORE, FILTER_BY_TITLE, SEARCH_BY_ID, LOAD_EXACT_PAGE
 } from '../actionTypes'

import { createReducer } from './reducer-factory'


const initialState = { pending: false, posts: [], appliedFilters: [], filteredPosts: [],
    error: null, count: 0, activePage: 1 }

const strategies = {
    FETCH_POSTS_PENDING: typeFetchPostsPendingTransformer,
    FETCH_POSTS_SUCCESS: typeFetchPostsSuccessTransformer,
    FETCH_POSTS_ERROR: typeFetchPostsErrorTransformer,
    FILTER_BY_TITLE: typeFilterByTitleTransformer,
    SEARCH_BY_ID: typeSearchByIdTransformer,
    LOAD_EXACT_PAGE: typeLoadExactPageTransformer,
    SORT_BY_ALPHABET: typeSortByAlphabetTransformer,
    SORT_BY_SCORE: typeSortByScoreTransformer,
    __default__: state => state

  }

export const postsReducer = createReducer(strategies, initialState);


//export default function postsReducer (state = initialState, action) {
//    const transformer = strategies[action.type] ?? strategies.__default__;
//    return transformer(state, action)
//}

//export default function postsReducer (state = initialState, action) {
//    let cloneState = Object.assign({}, state)
//    switch (action.type) {
//
//        case FETCH_POSTS_PENDING:
//            return typeFetchPostsPendingTransformer(cloneState, action)
//
//        case FETCH_POSTS_SUCCESS:
//            return typeFetchPostsSuccessTransformer(cloneState, action)
//
//        case FETCH_POSTS_ERROR:
//            return typeFetchPostsErrorTransformer(cloneState, action)
//
//        case FILTER_BY_TITLE:
//            return typeFilterByTitleTransformer(cloneState, action)
//
//        case SEARCH_BY_ID:
//            return typeSearchByIdTransformer(cloneState, action)
//
//        case LOAD_EXACT_PAGE:
//            return typeLoadExactPageTransformer(cloneState, action)
//
//        default:
//            return state
//    }
//}

function addFilterIfNotExists(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    if (index===-1) appliedFilters.push(filter);

    return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    appliedFilters.splice(index, 1);
    return appliedFilters;
}

function typeFetchPostsPendingTransformer(state, action) {
    return { ...state, pending: true }
}

function typeFetchPostsSuccessTransformer(state, action) {
    return { ...state, pending: false, posts: action.payload, appliedFilters: action.payload, count: action.payload.length,
            filteredPosts: action.payload }
}

function typeFetchPostsErrorTransformer(state, action) {
    return { ...state, pending: false, error: action.error }
}

function typeFilterByTitleTransformer(state, action) {

    console.log('filter')
    let newState = Object.assign({}, state)
    let value = action.payload
    let appliedFilters = state.appliedFilters
    if(value) {
        let filteredValues = state.posts.filter(p => {
            return p.title.toLowerCase().includes(value)
        })
        newState.filteredPosts = filteredValues
    }
    else {
            newState.filteredPosts = newState.posts
    }
    return newState
}


function typeSearchByIdTransformer(state, action) {

    const mal_id = action.payload
    const existingPost = state.posts.filter(p => { return p.mal_id === mal_id } )
    return {...state, existingPost: existingPost }
}

function typeLoadExactPageTransformer(state, action) {

    let newStatePage = Object.assign({}, state)

    let exactPage = -1

    if(action.payload === -1) {

        exactPage = state.activePage
    }
    else {
        exactPage = action.payload
    }
    let upperCountExact = 5 * exactPage
    let lowerCountExact = upperCountExact - 5
    let exactPosts = newStatePage.posts.slice(lowerCountExact, upperCountExact)
    newStatePage.activePage = exactPage
    newStatePage.filteredPosts = exactPosts
    return newStatePage
}

function typeSortByAlphabetTransformer(state, action) {
    let sortedArr = action.payload.direction === "asc" ?
       sortAsc(state.posts, 'title') :
       sortDesc(state.posts, 'title')

    console.log(sortedArr)
   return { ...state, filteredPosts: sortedArr }
}

function typeSortByScoreTransformer(state, action) {
    let sortedArr = action.payload.direction === "asc" ?
       sortAsc(state.posts, 'score') :
       sortDesc(state.posts, 'score')

    console.log(sortedArr)
   return { ...state, filteredPosts: sortedArr }
}

function sortAsc(arr, field) {
   return arr.sort(function (a, b) {
       if (a[field] > b[field]) {
           return 1;
       }
       if (b[field]> a[field]) {
           return -1;
       }
       return 0;
   })
}



function sortDesc(arr, field) {
   return arr.sort(function (a, b) {
       if (a[field] > b[field]) {
           return -1;
       }
       if (b[field]> a[field]) {
           return 1;
       }
       return 0;
   })
}