import React from "react"
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./AppProvider";
import { MessageForm } from "./"
import { deletePost, sendMessage } from "../API-Adapter";

const postCard = (props) => {
    const post = props.post
    const setPosts = props.setPosts;
    const posts = props.posts
    const {loggedIn} = useAppContext();
    const idx = props.idx

    const deletePostFromList = async(id) => {
        let currentPosts = [...posts]

        try{
            await deletePost (id)
            currentPosts.splice(idx, 1)
            setPosts(currentPosts)

            window.location.reload(true);
            // I looked up how to force a page reload in react. this works but is it what we want?
        } catch (error) {
            console.error(error);
        }
    }



return (

    <div> 
    <div id="postCard" key={idx} >
                                
        <h2 className = "title">
            {post.title}
        </h2>
        <ul>
            <li>Description:    {post.description}</li>
            <li>Location:   {post.location}</li>
            <li>Price:  {post.price}</li>
        </ul>

        { post.isAuthor === true && loggedIn || window.location.pathname.toLowerCase() === "/home" ? 
        //did this bc isAuthor is undefined on home pg. but it is safe to assume bc of our function for users/me that all posts that appear in home are made by user.
            <button id={"deleteButton"} onClick= {() => deletePostFromList(post._id, idx)}>Delete</button> 
        : null}
        { post.isAuthor === false && loggedIn ?
            <MessageForm post={post} idx={idx}/> 
            :null
        }
        </div>

        {
        post.messages.map((message, idx)=>{                     
            return(
                    <div id="messageViewCard" key = {idx}>
                        <p id = "messageFrom">From: {message.fromUser.username}</p>
                        <p id = "messageContent">Body: {message.content}</p>
                    </div>
            )}
        )
        }

    </div>
)}

export default postCard