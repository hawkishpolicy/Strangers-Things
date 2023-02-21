import React, { useState} from "react";
import { Link } from "react-router-dom";
import { postUserLogin } from "../API-Adapter";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

async function sendUserLogin(username, password) {
    try{
        const result = await postUserLogin(username, password);
        console.log(result)

        setUsername('')
        setPassword('')
        setLoggedIn(result.data.token)
    } catch(error) {
        console.log(error)
    }
}

    return (

        <div id="LoginPage">

        
        <form id="LoginCard"
            onSubmit={(event) => {
                event.preventDefault();
                sendUserLogin(username, password)

            }}>
            <input
            id={"userNameInput"}
            type={"text"}
            placeholder={"User Name"}
            value={username}
            required
            onChange={(event)=>{
                setUsername(event.target.value)
            }}
            ></input>
            
            <input
            id={"userPassword"}
            type={"password"}
            placeholder={"Password"}
            min={"8"}
            value={password}
            required
            onChange={(event)=>{
                setPassword(event.target.value)
            }}
            ></input>
            <button type ="submit">Enter</button>

            <h3>Forgot Password?
                <span><Link id={"passwordReset"} to={'/passwordReset'}> Reset Password Here</Link></span></h3>

            <h3>New User?<span><Link id={"registerButton"} to={`/register`}>Register Here
            </Link></span></h3>
        


        </form>
    </div>
    )

}





export default Login