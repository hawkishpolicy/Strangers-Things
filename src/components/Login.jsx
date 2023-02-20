import React from "react";
import { Link } from "react-router-dom";


const Login = () => {

    return (
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
            <button>Enter</button>

            <h2>Forgot Password?</h2>

            <h2>New User?<span><Link id={"registerButton"} to={`/register`}>
        <button>Register Here</button>
      </Link></span></h2>
        


        </form>
    )
}





export default Login