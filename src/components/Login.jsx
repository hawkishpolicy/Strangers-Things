import React from "react";


const Login = () => {

    return (
        <form>
            <input
            id={"userNameInput"}
            type={"text"}
            placeholder={"User Name"}
            ></input>
            <input
            id={"userPassword"}
            type={"text"}
            placeholder={"Password"}
            ></input>
            <input id={"confirmPassword"}
            type={"text"}
            placeholder={"Confirm Password"}
            ></input>
            <button>Enter</button>


        </form>
    )
}





export default Login