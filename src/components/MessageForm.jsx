import React, { useState } from "react";
import { sendMessage } from "../API-Adapter";

const MessageForm = (props) => {
  const [content, setContent] = useState("");

  async function messageToSend(content, id) {
    try {
      await sendMessage(content, id);

      setContent("");
    } catch {
      console.error(error);
    }
  }

  return (
    <>
      <form
        id="sendMessage"
        onSubmit={async (event) => {
          event.preventDefault();
          await messageToSend(content, props.post._id);
        }}
      >
        <input
          id="messageInput"
          placeholder="Send Message"
          value={content}
          required
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MessageForm;
