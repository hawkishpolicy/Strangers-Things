import React from "react"
import { sendMessage } from "../API-Adapter"

const MessageForm = (props) => {
    console.log(props.idx)
    return(
        <>
            <form id="sendMessage" onSubmit={async (event)=>{
                event.preventDefault()
                // await submitNewPost()
                messageInput[props.idx].value ? console.log(messageInput[props.idx].value) : null
                await sendMessage(messageInput[props.idx].value, props.post._id)
            }}>
                <input id="messageInput" placeholder="Send Message"></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default MessageForm