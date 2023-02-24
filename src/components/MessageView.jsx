import React from "react"
import { Navbar } from "./"
import { getUserPosts } from "../API-Adapter";

const MessageView = (props) => {
    console.log(props)
    return(
        <div id="messageViewPage">
            <Navbar />
            {
                // post.messages.map((message, idx)=>{                     
                //     return(
                //             <div key = {idx} id = "messages">
                //                 <h5 id = "messageTo">Message To User: {message.toUser.username}</h5>
                //                 <h4 id = "messageContent">{message.content}</h4>
                //             </div>
                //     )}
                // )
            }
        </div>
    )
}

export default MessageView