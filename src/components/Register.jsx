import React from "react";

const Register = () => {

    return(
        <div id="registerPage">
        
        <form id="registerCard">
        <input
            id={"userNameInput"}
            type={"text"}
            placeholder={"User Name"}
            required
            ></input>
            <input
            id={"userPassword"}
            type={"password"}
            placeholder={"Password"}
            min={"8"}
            required
            ></input>
            <input id={"confirmPassword"}
            type={"password"}
            placeholder={"Confirm Password"}
            min={"8"}
            required
            ></input>
            <button>Enter</button>
            </form>

            </div>
    )
}


export default Register