import React, { Component } from 'react'
import { connect } from 'react-redux'
import filterPostsByAPIAction from '../../filterPostsByAPI'
import FetchPostsAction  from '../../api/FetchPosts'

import { bindActionCreators } from 'redux'

class FilterByAPI extends Component {
    constructor(props) {

        super(props)
        this.state = {
            input: ''
        }
        this.filterByAPI = this.filterByAPI.bind(this)
    }

    filterByAPI() {

            if(this.state.input.length > 3)
            {

            console.log('16')
            console.log(this.props)
            console.log(this.state.input)
            const { filterPostsByAPI } = this.props
            filterPostsByAPI(this.state.input)

            } else { alert ('Requires atleast 3 or more characters') }

    }

    render() {

        return (
            <form>
                <input type='text'
                onChange= {(e) => this.setState({input: e.target.value})}
                placeholder = 'Filter by API'
                />
                <input type='button'  value='Submit'
                    onClick = {this.filterByAPI}  />
            </form>
        )
    }


}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        FetchPosts: FetchPostsAction,
        filterPostsByAPI: filterPostsByAPIAction
    }, dispatch)
)

export default connect(mapDispatchToProps,mapDispatchToProps)(FilterByAPI)

