import React, {useState} from "react";

const PostsLists = (props) => {
    const posts = props.posts;
    return(
        <div id="all-posts">
            {
                posts.map((post, idx) =>{
                    return(
                        <div key={idx} >
                        <h2 className = "title">
                           {post.title}
                        </h2>
                        <ul>
                            <li>{post.description}
                            </li>
                            <li>{post.location}</li>
                            <li>{post.price}</li>
                        </ul>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default PostsLists