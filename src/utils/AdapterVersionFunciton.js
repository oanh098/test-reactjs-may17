//original cart data that cannot be changed at source
 //let's pretend this is from a mysterious data service
 //we have no direct access to this
 var posts = [
   {item: "vintage clock", sku: 9284, value: 15.99},
   {item: "motivate carts", sku: 9232, value: 19.99}
 ]

 //old interface pulls in data from mysterious data service
 //we're not allowed to touch this
 function Posts(){
     return this.posts;
 }

 //our adapter code to translate the data
 //prevents us from consuming the Cart() directly
 function PostListViewAdapter(){
   var originalPosts = Posts();
   var adapterPosts = originalPosts.map(function(obj){
     return {
       item: obj.item,
       productId: obj.sku,
       price:obj.value

     }
   });

   return adapterPosts;
 }

 //now we can use the result of the CartAdapter() however we want
 //changes in Cart() will result in only a change in the adapter
 //the rest of the code remains unimpacted once the adapter is fixed
 console.log(PostListViewAdapter());