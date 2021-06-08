import React, {useState, useEffect, Component} from 'react'
import { connect } from 'react-redux'
import { filterByTitle } from '../../redux/actions'
import { bindActionCreators } from 'redux'

function decoratorFn (target, name, descriptor) {

    const newDescriptor = { ...descriptor }
    const originalFunction = descriptor.value


    function decoratorFunctionWarning(args) {

        alert(`Calling "${name}", decoratorFn `, args)
    }
    newDescriptor.value = decoratorFunctionWarning
    return newDescriptor
}


class FilterByTitle extends Component {
    constructor(props){

        super(props)
        this.filterByInput = this.filterByInput.bind(this)
        }

    componentDidMount(){
    }

//    @decoratorFn
    filterByInput(e){
        this.props.dispatch(filterByTitle(e.target.value))
        console.log(e.target.value)
    }

    render() {
        const {count} = this.props
        return (


            <form>
                <input type='text' onChange={ (e) =>
                    this.filterByInput(e)} placeholder='Filter by Title'
                 />

            </form>
        )
    }
}
const mapStateToProps = state => {

    const {count} = state.postsReducer
    return {count}
}
const mapDispatchToProps = dispatch => ({
    filterByTitleAction: () => dispatch(filterByTitle()),
})


export default connect(mapStateToProps)(FilterByTitle)
//onClick={this.props.filterByTitleAction} > Go </button>

