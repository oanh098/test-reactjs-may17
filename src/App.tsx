import React, {Component} from 'react'
import PostsListView from './features/posts/PostsListView'
//import { postsFetch } from './redux/actions'
import { connect } from 'react-redux'
import FilterByTitle from './features/filter/FilterByTitle'
import FilterByAPI from './features/filter/FilterByAPI'
import OrderByInput from './features/orderBy/OrderByInput'
import FilterByTitleFunc from './features/filter/FilterByTitleFunc'
import UsersListView from './features/users/UsersListView'
import {loadExactPage} from './redux/actions'
import { useFetch } from './hooks'
import { User } from './types/User'//typescript

import {
    Link,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'



export default function App() {

    /*const base = "https://jsonplaceholder.typicode.com";

     const { error: usersError, loading: usersLoading, data: usersData }
        = useFetch<User[]>(base + '/users')

    console.log({ error: usersError, loading: usersLoading, data: usersData })*/

  return (
      <Router>
      <nav>
          <Link to='/'>Posts |</Link>
          <Link to='/users'> Users </Link>
      </nav>
          <Switch>
            <Route exact path='/' render={() => (
                <div>
                    <FilterByTitle />
                    < FilterByTitleFunc />
                    <FilterByAPI />
                    <hr />
                    <OrderByInput />
                    <hr />
                    <PostsListView />
                </div>
            )}>

            </Route>

            <Route exact path='/posts/:postId' ></Route>
            <Route exact path='/users' component={UsersListView}></Route>
            <Route exact path='/editPost/:postId' ></Route>
          </Switch>

      </Router>
  )
}
