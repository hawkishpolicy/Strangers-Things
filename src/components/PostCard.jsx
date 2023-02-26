import React from "react";
import { useAppContext } from "./AppProvider";
import { MessageForm } from "./";
import { deletePost } from "../API-Adapter";

const postCard = (props) => {
  const post = props.post;
  const setPosts = props.setPosts;
  const posts = props.posts;
  const { loggedIn } = useAppContext();
  const idx = props.idx;

  const deletePostFromList = async (id) => {
    let currentPosts = [...posts];

    try {
      await deletePost(id);
      currentPosts.splice(idx, 1);
      setPosts(currentPosts);

      window.location.reload(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div id="postCard" key={idx}>
        <h2 className="title">{post.title}</h2>
        <ul>
          <li>Description: {post.description}</li>
          <li>Location: {post.location}</li>
          <li>Price: {post.price}</li>
        </ul>

        {(post.isAuthor === true && loggedIn) ||
        window.location.pathname.toLowerCase() === "/home" ? (
          <button
            id={"deleteButton"}
            onClick={() => deletePostFromList(post._id, idx)}
          >
            Delete
          </button>
        ) : null}

        {post.isAuthor === false && loggedIn ? (
          <MessageForm post={post} idx={idx} />
        ) : null}
      </div>

      {post.messages.map((message, idx) => {
        if (loggedIn) {
          return (
            <div id="messageViewCard" key={idx}>
              <p id="messageFrom">From: {message.fromUser.username}</p>
              <p id="messageContent">Body: {message.content}</p>
            </div>
          );
        }
        
      })}
    </div>
  );
};

export default postCard;
