import React, {useState} from "react";

const PostsLists = (props) => {
    const posts = props.posts;
    console.log(posts)
    return(
        <div id="all-posts">
            {
                posts.map((post, idx) =>{
                    return(
                        <h2 key = {idx} className = "title">
                           {post.title}
                        </h2>
                    )
                })
            }
            <h2>posts go here</h2>
        </div>
    )
}

export default PostsLists