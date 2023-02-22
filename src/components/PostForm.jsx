import React from "react"
import { addPost } from "../API-Adapter"
import { Link, useNavigate } from "react-router-dom"

const postForm = () => {
    // const submitNewPost = async () => {
    //     const newPost = await addPost()
    // }
    return(
        <>
            <form id="submitPost" onSubmit={async (event)=>{
                event.preventDefault()
                // await submitNewPost()
                await addPost(postName.value, postDesc.value, postPrice.value)
            }}>
                <input id="postName" placeholder="Post Name"></input>
                <input id="postDesc" placeholder="Description"></input>
                <input id="postPrice" placeholder="Price"></input>
                <button type="submit">Submit</button>
            </form>
            <Link id={"goBackFromPostForm"} to={`/home`}>Go Back</Link>
        </>
    )
}

export default postForm