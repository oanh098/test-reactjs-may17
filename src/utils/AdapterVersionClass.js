//your original cart data service
//this is just a hypothetical name
import { PostListView as V1 } from './features/posts/PostListView'

class PostListViewAdapter {

    getPostListView(){

        //some cart code
        //using data from the imported service
        //can transform the original output to suit your needs
        return cart
    }

    removePostListView(){
        //some cart code
        return cart
    }

}

export default new PostListViewAdapter();

//using
//
//import PostListViewAdapter from "./utils/PostListViewAdapter"
//
// console.log(PostListViewAdapter.getPostListView());
