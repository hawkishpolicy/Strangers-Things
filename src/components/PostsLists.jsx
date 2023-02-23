import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router";
import { sendMessage } from "../API-Adapter"
import { MessageForm } from "./"

const PostsLists = (props) => {
    const posts = props.posts;
    const setPosts = props.setPosts 
    console.log(props)    

    const navigate = useNavigate()

    // const idx = props.idx
        
    //    const deletePostFromList = async(id) => {
    //         let currentPosts = [...posts]

    //         try{
    //             await deletePost (id)
    //             currentPosts.splice(idx, 1)
    //             setPosts(currentPosts)

    //             window.location.reload(true);
    //             // I looked up how to force a page reload in react. this works but is it what we want?
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    
    
    return(
        <div id="all-posts">
            {   
                posts.map((post, idx) =>{
                    if(post.active){
                        console.log(post.active);
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
                                {/* { post.isAuthor === true ? 
                                    <button id={"deleteButton"} onClick= {() => deletePostFromList(post._id, idx)}>Delete</button> 
                                    : null 
                                } */}
                                <MessageForm post={post} idx={idx}/>
                            </div>
                        )
                        
                    } 
                })
            }
            
        </div>
    )
    
}
// {post.isAuthor ? : console.log("nothing to delete")

export default PostsLists