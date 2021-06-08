import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchPostsAction  from '../../fetchPosts'
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination"
import {loadExactPage} from '../../redux/actions'
import connectDecorator from '../../redux/decorators/connectDecorator'


//@connectDecorator
class PostsListView extends Component {

    constructor(props){

        super(props)
        this.state = {
            show: false,
            mal_id: -1,
            post: null,
            title: '',
            synopsis: '',
            image_url: '',
            activePg: 1

        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

     handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePg: pageNumber});
        const {loadExactPage} = this.props
        loadExactPage(pageNumber)
     }

     componentDidMount() {
        const {fetchPosts} = this.props
        fetchPosts()

    }

    showModal(e){
        const mal_id = e.target.id
        const existingPost = this.props.posts.filter(p => ( p.mal_id == mal_id ))
        this.setState({
            show: true,
            post: existingPost,
            title: existingPost[0].title,
            image_url: existingPost[0].image_url,
            synopsis: existingPost[0].synopsis})
    }

    hideModal(){
        this.setState({show: false})
    }

    shouldComponentRender() {

        const {pending} = this.props
        if(this.pending === false) return false;
        return true
    }

    render(){
        const posts = this.props.filteredPosts

        if(!this.shouldComponentRender()) return (<div>Loading..</div>)
        const render =  posts && posts.length && posts.map( post => (

                <div key={post.mal_id} className="col">
                <div className="card h-100 shadow-sm"> <img src={post.image_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="clearfix mb-3"> <span className="float-end price-hp">{post.title}</span> </div>
                        <h5 className="card-title">{post.synopsis.substring(0,50)}</h5>
                        <div className="text-center my-4"> <a id={post.mal_id} href='#' onClick={(e) => this.showModal(e)} className="btn btn-warning">More..</a> </div>
                    </div>
                </div>
                    <Modal handleClose={this.hideModal}  show={this.state.show} >
                    <div className="container-fluid">
                        <div className="row">
                           <img src={this.state.image_url} className="card-img-top" alt="..." />
                           <div className="card-body">
                            <div className="clearfix mb-3"> <span className="float-end price-hp">{this.state.title}</span> </div>
                            <h5 className="card-title">{this.state.synopsis}</h5>
                            </div>
                    </div></div>

                    </Modal>
                </div>


        ) )
        return (
            <div>
            <Pagination
              itemClass="page-item"
              linkClass="page-link"
              activePage={this.state.activePg}
              itemsCountPerPage={5}
              totalItemsCount={this.props.count}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange.bind(this)}
            />
            <main>
            <div className="container-fluid bg-trasparent my-4 p-3" style={{position: 'relative'}}>
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                {render}
            </div></div></main>

            </div>

        )
    }

}
const mapStateToProps = state => {

    const activePage = state.postsReducer.activePage
    const {posts} = state.postsReducer
    const {appliedFilters} = state.postsReducer
    const {filteredPosts} = state.postsReducer
    const {count} = state.postsReducer
    return {posts, appliedFilters, filteredPosts, activePage, count}
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchPosts: fetchPostsAction,
        loadExactPage: (data) => dispatch(loadExactPage(data))
     }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(PostsListView)

function Modal({handleClose, show, children, post}){

        const displayBlockOrNone = show ? "customModal display-block" : "customModal display-none";
    return(
        <div className={displayBlockOrNone}>
        <section className="modal-main">
            {children}

            <input type="button" value="Close sep" onClick={handleClose}/>
        </section>
        </div>
    );
}








