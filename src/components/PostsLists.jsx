import React, {useState} from "react";
import { useNavigate } from "react-router";
import { deletePost } from "../API-Adapter";

const PostsLists = (props) => {
    const posts = props.posts;
    const setPosts = props.setPosts 
    // const setPosts = props.setPosts

    // const deletePostfromList = props.deletePostfromList
    console.log(setPosts, "this is setPOst")
    console.log(props, "this is props")

    // const navigate = useNavigate()

    const id = props.posts.id
    const idx = props.idx
       console.log(props.posts)
        
       const deletePostfromList = async(id) => {
            let currentPosts = posts

            try{
                await deletePost (id)
                currentPosts.splice(idx, 1)
                props.setPosts(currentPosts)
            } catch (error) {
                console.error(error);
            }
        }
    
        // id,
    
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
                       
                       <button id={"deleteButton"} onClick= {() => deletePostfromList(post._id, idx)} >Delete</button>
                        {console.log(post._id)}
                        </div>
                    )
                })
            }
            
        </div>
    )
    
}
// {post.isAuthor ? : console.log("nothing to delete")
// 
export default PostsLists