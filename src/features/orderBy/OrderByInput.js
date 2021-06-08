import React, {Component} from 'react'
import { sortByAlphabet, sortByScore } from '../../redux/actions'
import {connect} from 'react-redux'


class OrderByInput extends Component {

    constructor(props) {
        super(props)
        this.sortByInput = this.sortByInput.bind(this)
    }

    sortByInput(e) {
        let value = e.target.value;
        let direction = value.endsWith('asc') ? "asc" : "desc";

        if (value.startsWith('title')){
        console.log(value)
            this.props.dispatch(sortByAlphabet({direction}))
        }else {
            this.props.dispatch(sortByScore({direction}));
        }
    }

    render() {
        return (

            <div className="select">
                <select onChange={e => {
                    this.sortByInput(e)
                }}>
                    <option defaultValue disabled >Sort by</option>

                    <option value='title_asc'>Title - A-Z</option>
                    <option value='title_desc'>Title - Z-A</option>

                    <option value='price_asc'>Score - Lowest to Highest</option>
                    <option value='price_desc'>Score - Highest to Lowest</option>

                </select>
            </div>
        )
    }

}


export default connect()(OrderByInput)

