import React from "react";
import { Link } from "react-router-dom";


const Login = () => {

    return (

        <div id="LoginPage">

        
        <form id="LoginCard">
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

            <h3>Forgot Password?
                <span><Link id={"passwordReset"} to={'/passwordReset'}> Reset Password Here</Link></span></h3>

            <h3>New User?<span><Link id={"registerButton"} to={`/register`}>Register Here
            </Link></span></h3>
        


        </form>
    </div>
    )

}





export default Login