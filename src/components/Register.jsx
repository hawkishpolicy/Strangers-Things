import React from "react";

const Register = () => {

    return(
        <form>
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

    )
}


export default Register