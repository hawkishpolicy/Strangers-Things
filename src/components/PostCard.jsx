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

    <div key={idx} >
                                
        <h2 className = "title">
            {post.title}
        </h2>
        <ul>
            <li>{post.description}</li>
            <li>{post.location}</li>
            <li>{post.price}</li>
        </ul>

        { post.isAuthor === true && loggedIn || window.location.pathname.toLowerCase() === "/home" ? 
        //did this bc isAuthor is undefined on home pg. but it is safe to assume bc of our function for users/me that all posts that appear in home are made by user.
            <button id={"deleteButton"} onClick= {() => deletePostFromList(post._id, idx)}>Delete</button> 
        : null}

        { post.isAuthor === false && loggedIn ?
            <MessageForm post={post} idx={idx}/> 
        :null
        }

        {
        post.messages.map((message, idx)=>{                     
            return(
                    <div key = {idx} id = "messages">
                        <h5 id = "messageFrom">Message From User: {message.fromUser.username}</h5>
                        <h4 id = "messageContent">{message.content}</h4>
                    </div>
            )}
        )
        }

    </div>
)}

export default postCard