import React from "react"
import { Navbar} from "./"

const passwordReset = () => {
    return (
        <>
        <Navbar/>
        <h1 id="passwordResetTitle">Password Reset</h1>
        <div id="resetPage">
            <form id="resetCard">
            <input
            id={"userNameInput"}
            type={"text"}
            placeholder={"User Name"}
            required
            ></input>

            <p>or</p>
            
            <input
            id={"userEmail"}
            type={"text"}
            placeholder={"Email"}
            min={"8"}
            required
            ></input>
            <button>Enter</button>
        
            </form>
        </div>
        </>
    )
}


export default passwordReset