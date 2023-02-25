import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { postUserLogin } from "../API-Adapter";
import { useAppContext } from "./AppProvider";
import Navbar from "./Navbar";



const Login = () => {
    const {loggedIn, setLoggedIn} = useAppContext() 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    
async function sendUserLogin(username, password) {

    try{
        const result = await postUserLogin(username, password);
        console.log(result);

        setUsername('')
        setPassword('')
        setLoggedIn(result.data.token)
        window.localStorage.setItem ("userToken", result.data.token )
        window.localStorage.setItem ("userName", username)
        navigate("/home");
    } catch(error) {
        console.log(error)
}
}
    return (
<>
            <Navbar/>
            <h1 id="loginTitle">Login Please!</h1>
        <div id="LoginPage">
            

        
        <form id="LoginCard"
            onSubmit={async (event) => {
                event.preventDefault();
                await sendUserLogin(username, password)
            
                    
                

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
    </>
    )

}





export default Login