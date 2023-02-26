import React from "react";
import { addPost } from "../API-Adapter";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const postForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div id="submitPostPage">
        <h1 id="createPostTitle">Create Post</h1>
        <form
          id="submitPost"
          onSubmit={async (event) => {
            event.preventDefault();
            await addPost(postName.value, postDesc.value, postPrice.value);
            navigate("/home");
          }}
        >
          <input id="postName" placeholder="Post Name"></input>
          <input id="postDesc" placeholder="Description"></input>
          <input id="postPrice" placeholder="Price"></input>
          <button id="cardButton" type="submit">Submit</button>

          <Link id={"goBackFromPostForm"} to={`/home`}>
            <button id="cardButton">Go Back</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default postForm;
