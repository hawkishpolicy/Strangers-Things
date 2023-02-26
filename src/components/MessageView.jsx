import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import { getUserPosts } from "../API-Adapter";

const MessageView = () => {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const allPosts = await getUserPosts();

    setMessages(allPosts.data.messages);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div id="messageViewPage">
      <Navbar />
      <h1 id="yourMessagesHeader"> Your Sent Messages </h1>

      {messages.map((message, idx) => {
        if (message.fromUser.username === localStorage.getItem("userName")) {
          return (
            <div id="messageViewCard" key={idx}>
              <h3>To: {message.post.author.username}</h3>
              <p id="messageFrom">Subject: {message.post.title} </p>
              <p id="messageContent"> Body: {message.content} </p>
            </div>
          );
        }

      })}
    </div>
  );
};

export default MessageView;
