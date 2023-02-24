import React, {useState} from "react"
import { sendMessage } from "../API-Adapter"

const MessageForm = (props) => {
    const [content, setContent] = useState("");

    async function messageToSend(content, id){
        try{
            const result = await sendMessage(content, id);
            console.log(result);

            setContent('');
        } catch{
            console.error(error);
        }

    }
    // messageInput[props.idx].value ? console.log(messageInput[props.idx].value) : null

    return(
        <>
            <form id="sendMessage" onSubmit={async (event)=>{
                event.preventDefault()
                await messageToSend(content, props.post._id);
                console.log(content, props.post._id);
            }}>

                <input 
                id="messageInput" 
                placeholder="Send Message"
                value = {content}
                required
                onChange={(event)=>{
                    setContent(event.target.value)
                }}
                ></input>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default MessageForm