import React, {Component} from 'react'
import PostsListView from './features/posts/PostsListView'
import { postsFetch } from './redux/actions'
import { connect } from 'react-redux'
import FilterByTitle from './features/filter/FilterByTitle'
import FilterByAPI from './features/filter/FilterByAPI'
import OrderByInput from './features/orderBy/OrderByInput'
import FilterByTitleFunc from './features/filter/FilterByTitleFunc'
import {loadExactPage} from './redux/actions'

import {
    Link,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

export default class App extends Component {

  constructor(props){
    super(props)

  }


  componentDidMount() {
    }
  render() {

  return (

  <div>
      <h2>Getting started with React testing library</h2>

      <Router>
      <nav>
      <Link to='/'>Posts </Link>
      <Link to='/users'> Users </Link>
      </nav>


      <Switch>
        <Route exact path='/' render={() => (
            <div>
                <FilterByTitle />
                <FilterByAPI />
                <hr />
                <OrderByInput />
                <hr />
                <PostsListView />
            </div>
        )}>

        </Route>

        <Route exact path='/posts/:postId' ></Route>
        <Route exact path='/users'></Route>
        <Route exact path='/editPost/:postId' ></Route>
        <Route></Route>
      </Switch>

      </Router>
  </div>
  )
  }
}
