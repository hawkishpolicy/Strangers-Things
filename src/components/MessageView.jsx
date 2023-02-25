import React, {useState, useEffect} from "react"
import { Navbar } from "./"
import { getUserPosts } from "../API-Adapter";

const MessageView = () => {
    const [messages, setMessages] = useState([]);

    const getMessages = async () =>{
        const allPosts = await getUserPosts();
        
        setMessages(allPosts.data.messages);       //this is only returning the messages from API
    }
    console.log(messages)
    
    useEffect(()=>{
        getMessages();
    }, [])
    
   
    
    return(
        <div id="messageViewPage">
            <Navbar />
            <h1 id = "yourMessagesHeader"> Your Sent Messages </h1>
            { messages.map((message, idx)=>{
                if(message.fromUser.username === localStorage.getItem("userName")){ //checks the username stored in local storage (i did this in login component @ same time as token)
                    return(
                    <div id="messageViewCard" key = {idx}>
                        <h3>
                            To: {message.post.author.username}
                        </h3>
                        <p>Subject: {message.post.title} </p>
                        <p> Body: {message.content} </p>
                    </div>
                    )
                }
            })
            }
        </div>
    )
}

export default MessageView